"use client";
import React, { useContext } from "react";
import fetchData from "@/Utils/FetchData";
import notify from "@/Utils/notify";
import useFormFelids from "@/Utils/useFormFelids";
import { useRouter } from "next/navigation";
import AuthContext from "@/Utils/AuthContext";

export default function Login() {
  const router = useRouter();
  const [felids, handleChange] = useFormFelids({ username: "", password: "" });

  const { handleToken } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const rawResponse = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(felids),
      });

      const response = await rawResponse.json();

      if (response?.token) {
        localStorage.setItem("token", response.token);
        handleToken(response.token); 
        notify("success", "Successfully login");
        router.push("/"); 
      } else {
        notify("error", "Invalid username or password");
      }
    } catch (error) {
      console.log(error);
      notify("error", "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
          Welcome Back 👋
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
            value={felids?.username}
            onChange={handleChange}
            placeholder="your_username"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
          />
        </div>
        <div className="mb-6">
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
            value={felids?.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
          />

        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="w-full bg-black text-white py-3 rounded-xl text-base font-semibold shadow-md hover:bg-gray-900 transition-transform duration-300 hover:scale-[1.02]"
        >
          Sign In
        </button>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-pink-600 hover:underline font-medium transition-all duration-200"
            onClick={() => router.push("/register")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
