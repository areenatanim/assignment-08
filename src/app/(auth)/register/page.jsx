"use client";



import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegisterFunc = async (data) => {
        // Prevent multiple submissions
        if (isLoading) return;

        setIsLoading(true);

        try {
            const { email, name, photo, password } = data;

            console.log("Attempting signup with:", {
                email,
                name,
                hasPhoto: !!photo,
                passwordLength: password?.length
            });

            // Validate password length before sending
            if (password.length < 8) {
                setError("password", {
                    type: "manual",
                    message: "Password must be at least 8 characters"
                });
                setIsLoading(false);
                return;
            }

            const { data: res, error } = await authClient.signUp.email({
                name: name.trim(),
                email: email.trim().toLowerCase(),
                password: password,
                image: photo || undefined, // Send undefined if no photo
                callbackURL: "/",
            });

            console.log("Response:", res);
            console.log("Error:", error);

            if (error) {
                // Handle specific error cases
                if (error.message?.includes("email")) {
                    setError("email", {
                        type: "manual",
                        message: "This email is already registered or invalid"
                    });
                } else {
                    alert(`Signup failed: ${error.message || "Unknown error"}`);
                }
                setIsLoading(false);
                return;
            }

            if (res) {
                alert("Signup successful! Please check your email or login.");
                // Optionally redirect
                // window.location.href = "/login";
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 py-28">
            <div className="p-4 rounded-xl bg-white w-full max-w-md">
                <h2 className="font-bold text-3xl text-center mb-6">
                    Register your account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    {/* Name Field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Type here name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            })}
                            disabled={isLoading}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </fieldset>

                    {/* Photo URL Field - Now Optional */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL (Optional)</legend>
                        <input
                            type="url"
                            className="input w-full"
                            placeholder="https://example.com/photo.jpg"
                            {...register("photo", {
                                // Remove required validation
                            })}
                            disabled={isLoading}
                        />
                        {errors.photo && (
                            <p className="text-red-500 text-sm">{errors.photo.message}</p>
                        )}
                    </fieldset>

                    {/* Email Field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Type here email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            disabled={isLoading}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </fieldset>

                    {/* Password Field */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input w-full pr-10"
                            placeholder="Type here password (min 8 characters)"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
                            disabled={isLoading}
                        />
                        <span
                            className="absolute right-3 top-4 cursor-pointer"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </fieldset>

                    <button
                        type="submit"
                        className="btn w-full bg-slate-800 text-white hover:bg-slate-700"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="loading loading-spinner"></span>
                                Registering...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;