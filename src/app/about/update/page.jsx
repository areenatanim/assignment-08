// app/profile/update/page.jsx
// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useSession } from "better-auth/react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { 
//   ArrowLeft, 
//   User, 
//   Camera,
//   Save,
//   X,
//   CheckCircle,
//   AlertCircle
// } from "lucide-react";
// import { toast } from "react-toastify";
// import { authClient } from "@/lib/auth-client";
// import Loading from "@/components/Loading";

// const UpdateProfilePage = () => {
//   const router = useRouter();
//   const { data, isPending, error, refetch } = useSession();
//   const fileInputRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     image: null,
//     bio: "",
//     location: "",
//     website: "",
//   });
//   const [previewImage, setPreviewImage] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   // Set initial data when session loads
//   useEffect(() => {
//     if (data?.user) {
//       setFormData({
//         name: data.user.name || "",
//         image: null,
//         bio: data.user.bio || "",
//         location: data.user.location || "",
//         website: data.user.website || "",
//       });
//       setPreviewImage(data.user.image || null);
//     }
//   }, [data]);

//   if (isPending) {
//     return <Loading />;
//   }

//   if (error || !data?.user) {
//     toast.error("Failed to load profile");
//     router.push("/profile");
//     return null;
//   }

//   const user = data.user;

//   // Handle image selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // Validate file
//     if (!file.type.startsWith("image/")) {
//       toast.error("Please upload an image file");
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       toast.error("Image size should be less than 5MB");
//       return;
//     }

//     // Create preview
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreviewImage(reader.result);
//       setFormData(prev => ({ ...prev, image: file }));
//     };
//     reader.readAsDataURL(file);
//   };

//   // Handle image upload with progress
//   const uploadImage = async (file) => {
//     setIsUploading(true);
//     setUploadProgress(0);
    
//     try {
//       const uploadFormData = new FormData();
//       uploadFormData.append("avatar", file);

//       const xhr = new XMLHttpRequest();
      
//       return new Promise((resolve, reject) => {
//         xhr.upload.addEventListener("progress", (event) => {
//           if (event.lengthComputable) {
//             const progress = Math.round((event.loaded / event.total) * 100);
//             setUploadProgress(progress);
//           }
//         });

//         xhr.onload = async () => {
//           if (xhr.status === 200) {
//             try {
//               const response = JSON.parse(xhr.responseText);
//               resolve(response.url);
//             } catch (error) {
//               reject(new Error("Invalid response"));
//             }
//           } else {
//             reject(new Error("Upload failed"));
//           }
//         };

//         xhr.onerror = () => reject(new Error("Network error"));
        
//         xhr.open("POST", "/api/upload-avatar");
//         xhr.send(uploadFormData);
//       });
//     } catch (error) {
//       console.error("Upload error:", error);
//       toast.error("Failed to upload image");
//       return null;
//     } finally {
//       setIsUploading(false);
//       setUploadProgress(0);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate name
//     if (!formData.name.trim()) {
//       toast.error("Please enter your name");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       let imageUrl = user.image;

//       // Upload image if changed
//       if (formData.image && formData.image instanceof File) {
//         const uploadedUrl = await uploadImage(formData.image);
//         if (uploadedUrl) {
//           imageUrl = uploadedUrl;
//         } else {
//           setIsSubmitting(false);
//           return;
//         }
//       }

//       // Update user profile
//       const updateData = {
//         name: formData.name.trim(),
//         image: imageUrl,
//         bio: formData.bio || "",
//         location: formData.location || "",
//         website: formData.website || "",
//       };

//       const { error: updateError } = await authClient.updateUser(updateData);

//       if (updateError) {
//         throw new Error(updateError.message || "Failed to update profile");
//       }

//       toast.success("Profile updated successfully! 🎉");
      
//       // Refresh session data
//       await refetch();
      
//       // Redirect back to profile
//       setTimeout(() => {
//         router.push("/profile");
//         router.refresh();
//       }, 1500);

//     } catch (error) {
//       console.error("Update error:", error);
//       toast.error(error.message || "Error updating profile");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle cancel
//   const handleCancel = () => {
//     if (formData.image) {
//       if (!confirm("You have unsaved changes. Are you sure you want to leave?")) {
//         return;
//       }
//     }
//     router.push("/profile");
//   };

//   // Remove image
//   const handleRemoveImage = () => {
//     setPreviewImage(null);
//     setFormData(prev => ({ ...prev, image: null }));
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         {/* Header with Back Button */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={handleCancel}
//             className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Profile
//           </button>
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//             Update Profile
//           </h1>
//           <div className="w-24"></div> {/* Spacer for alignment */}
//         </div>

//         {/* Update Form Card */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-6 md:p-8">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Image Upload Section */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
//                   Profile Picture
//                 </label>
//                 <div className="flex flex-col items-center">
//                   <div className="relative group">
//                     {/* Image Preview */}
//                     <div className="w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-600 overflow-hidden bg-gray-100 dark:bg-gray-700">
//                       {previewImage ? (
//                         <Image
//                           src={previewImage}
//                           alt="Profile preview"
//                           width={128}
//                           height={128}
//                           className="object-cover w-full h-full"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-5xl font-bold">
//                           {user.name?.charAt(0)?.toUpperCase() || "U"}
//                         </div>
//                       )}
//                     </div>

//                     {/* Upload Overlay */}
//                     <button
//                       type="button"
//                       onClick={() => fileInputRef.current?.click()}
//                       className="absolute bottom-0 right-0 p-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-colors"
//                     >
//                       <Camera className="w-5 h-5 text-white" />
//                     </button>

//                     {/* Remove Image Button */}
//                     {previewImage && (
//                       <button
//                         type="button"
//                         onClick={handleRemoveImage}
//                         className="absolute top-0 right-0 p-1.5 bg-red-500 hover:bg-red-600 rounded-full shadow-lg transition-colors"
//                       >
//                         <X className="w-4 h-4 text-white" />
//                       </button>
//                     )}
//                   </div>

//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />

//                   <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//                     Click the camera icon to upload a new photo
//                   </p>
//                   <p className="text-xs text-gray-400 dark:text-gray-500">
//                     Recommended: Square image, max 5MB
//                   </p>

//                   {/* Upload Progress */}
//                   {isUploading && (
//                     <div className="w-full max-w-xs mt-4">
//                       <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
//                         <span>Uploading...</span>
//                         <span>{uploadProgress}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                         <div 
//                           className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//                           style={{ width: `${uploadProgress}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Name Input */}
//               <div>
//                 <label 
//                   htmlFor="name" 
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
//                     placeholder="Enter your full name"
//                     required
//                     disabled={isSubmitting}
//                   />
//                 </div>
//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                   This will be displayed on your profile
//                 </p>
//               </div>

//               {/* Bio Input */}
//               <div>
//                 <label 
//                   htmlFor="bio" 
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Bio
//                 </label>
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   rows="3"
//                   value={formData.bio}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none"
//                   placeholder="Tell us about yourself..."
//                   disabled={isSubmitting}
//                 />
//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                   Max 500 characters
//                 </p>
//               </div>

//               {/* Location Input */}
//               <div>
//                 <label 
//                   htmlFor="location" 
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
//                   placeholder="e.g., New York, USA"
//                   disabled={isSubmitting}
//                 />
//               </div>

//               {/* Website Input */}
//               <div>
//                 <label 
//                   htmlFor="website" 
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Website
//                 </label>
//                 <input
//                   type="url"
//                   id="website"
//                   name="website"
//                   value={formData.website}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
//                   placeholder="https://example.com"
//                   disabled={isSubmitting}
//                 />
//               </div>

//               {/* Email Display (Read-only) */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     value={user.email || ""}
//                     disabled
//                     className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 cursor-not-allowed"
//                   />
//                 </div>
//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center">
//                   <AlertCircle className="w-3 h-3 mr-1" />
//                   Email cannot be changed here. Contact support if needed.
//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting || isUploading}
//                   className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting || isUploading ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
//                       {isUploading ? `Uploading ${uploadProgress}%` : "Updating..."}
//                     </>
//                   ) : (
//                     <>
//                       <Save className="w-5 h-5 mr-2" />
//                       Update Information
//                     </>
//                   )}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors"
//                   disabled={isSubmitting}
//                 >
//                   Cancel
//                 </button>
//               </div>

//               {/* Success Message */}
//               {isSubmitting && !isUploading && !error && (
//                 <div className="flex items-center justify-center text-green-600 dark:text-green-400 mt-4">
//                   <CheckCircle className="w-5 h-5 mr-2" />
//                   Profile updated successfully!
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfilePage;