"use client"
import React from "react";
import { useRouter } from "next/navigation";
export default function Register() {
    const router=useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
          Create Your Account 🎉
        </h2>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repeat your password"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
        <button
          type="button"
          className="w-full bg-black text-white py-3 rounded-xl font-semibold shadow-md hover:bg-gray-900 transition-transform duration-300 hover:scale-[1.02]"
        >
          Sign Up
        </button>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button onClick={()=>router.push("/login")} className="text-pink-600 hover:underline font-medium transition-all duration-200">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
