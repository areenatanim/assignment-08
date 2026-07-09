"use client"
import Image from "next/image";
import Link from "next/link";
import cow from "@/assets/cow-icon.png"
import { useState } from "react";
import NavLink from "./NavLink";
// import { useSession } from "@/lib/auth-client";
import icon from "@/assets/cow.png"
import { signOut } from "better-auth/api";
// import Loading from "@/app/loading";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const link = <>
        <li>
            <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink href={"/allAnimals"}>All Animals</NavLink>
        </li>
    </>

    // const { data, isPending } = useSession();
    // if (isPending) {
    //     return <Loading />
    // }
    // console.log(data);

    // const user = data?.user;
    return (

        <div>

            <nav className={`sticky top-0 z-40 shadow-xl w-full     border-separator bg-background/70...`}
            >
                <header className="flex h-16 items-center justify-between px-6 w-11/12 mx-auto">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >

                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <div className="flex items-center  gap-3">
                            <Image
                                src={cow}
                                alt="cow icon"
                                width={48}
                                height={48}
                            ></Image>
                            <Link href={"/"} className="font-bold">QurbaniHat</Link>
                        </div>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        {link}
                    </ul>


                    {/* {
                        user ? <>
                            <div className="flex gap-1.5 items-center">
                                <p>welcome {user.name}!</p>
                                <div className="avatar avatar-online">
                                    <div className="w-24 rounded-full">
                                        <Image
                                            src={icon}
                                            alt="icon"
                                            width={45}
                                            height={45}
                                        ></Image>
                                    </div>
                                </div>

                                <button
                                    className="btn bg-green-800 text-white px-3 py-2 rounded-xl hover:bg-green-700"
                                    onClick={() => signOut()}>
                                    LogOut
                                </button>
                            </div>
                        </> :
                            <>
                                <div className="flex gap-2">
                                    <button className="btn bg-green-800 text-white px-3 py-2 rounded-xl hover:bg-green-700">
                                        <Link href={"/login"}>login</Link>
                                    </button>
                                    <button className="btn bg-green-800 text-white px-3 py-2 rounded-xl hover:bg-green-700">
                                        <Link href={"/register"}>Register</Link>
                                    </button>
                                </div>
                            </>
                    }
 */}


                    <div className="flex gap-2">
                        <button className="btn bg-green-800 text-white px-3 py-2 rounded-xl hover:bg-green-700">
                            <Link href={"/login"}>login</Link>
                        </button>
                        <button className="btn bg-green-800 text-white px-3 py-2 rounded-xl hover:bg-green-700">
                            <Link href={"/register"}>Register</Link>
                        </button>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {link}
                        </ul>
                    </div>
                )}

            </nav>

        </div>
    );
};

export default NavBar;