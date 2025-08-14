"use client";
import AuthContext from "@/Utils/AuthContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const path = pathname.split("/")[1];
    if ((path === "login" || path === "register") && token) {
      router.push("/");
    }
  }, [pathname]);
  console.log(pathname);
  const { token, handleToken } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-white text-2xl font-bold tracking-wide">
            MyStore
          </span>
        </Link>

        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              href="/"
              className="text-white text-lg hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/user"
              className="text-white text-lg hover:text-blue-400 transition duration-300"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-white text-lg hover:text-blue-400 transition duration-300"
            >
              Products
            </Link>
          </li>
          {token ? (
            <li>
              <button
                onClick={() => handleToken(null)}
                className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="flex items-center gap-2 text-white text-lg hover:text-blue-400 transition duration-300"
              >
                Login/Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
