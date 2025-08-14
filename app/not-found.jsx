"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-white animate-bounce mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-300 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
