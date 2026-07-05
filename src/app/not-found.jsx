"use client"
import Link from "next/link";
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Text */}
                <div className="text-8xl sm:text-9xl font-extrabold text-white mb-4">
                    <span className="bg-gradient-to-r from-[#f093fb] to-[#f5576c] bg-clip-text text-transparent">
                        404
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Page Not Found
                </h1>

                <p className="text-base sm:text-lg text-white/70 mb-8">
                    Oops! The page your looking for does not exist.
                </p>

                {/* Search */}
                <div className="relative max-w-md mx-auto mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-3.5 pl-12 pr-4 rounded-full border border-white/15 bg-white/5 text-white placeholder:text-white/35 outline-none focus:border-[#f5576c]/50"
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#f093fb] to-[#f5576c]">
                        <Home size={18} />
                        Home
                    </Link>
                    <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-white/5 border border-white/15">
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/60 text-sm">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <Link href="/blog" className="hover:text-white">Blog</Link>
                    <Link href="/about" className="hover:text-white">About</Link>
                    <Link href="/contact" className="hover:text-white">Contact</Link>
                </div>
            </div>
        </div>

    );
};

export default NotFound;