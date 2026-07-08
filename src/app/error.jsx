'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
    error,
    reset,
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-6xl">⚠️</span>
                    </div>
                </div>

                <h1 className="text-7xl font-bold text-gray-900 mb-2">Oops!</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    You Have to register for the access...
                </h2>

                <p className="text-gray-600 mb-8 text-lg">
                    We encountered an unexpected error. Don&apos;t worry, our team has been notified.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/register"
                        className="px-8 py-3 bg-gray-900 hover:bg-black text-white font-medium rounded-xl transition-all duration-200"
                    >
                        Back to Register
                    </Link>
                </div>

                <p className="mt-10 text-sm text-gray-500">
                    Error ID: {error?.digest || "Unknown"}
                </p>
            </div>
        </div>
    );
}