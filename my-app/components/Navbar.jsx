"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar({ img, email, loggedIn, name }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log("Sign out clicked");
  };

  const handleGoogleSignOut = () => {
    signOut("google", { callbackUrl: "/" }); // redirects to dashboard after login
  };
  return (
    <nav className="w-full px-4 md:px-8 pt-2  flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/image 2.png"
          alt="BookingJini"
          width={150}
          height={0}
          className="h-18 w-auto cursor-pointer"
        />
      </div>
      {/* <div className="md:flex-grow"></div> */}

      <div className="hidden md:flex space-x-24 pr-25">
        <Link href="/" className="text-black font-semibold hover:text-blue-700">
          Home
        </Link>
        <Link href="/" className="text-black font-semibold hover:text-blue-700">
          Explore
        </Link>
        <Link href="/" className="text-black font-semibold hover:text-blue-700">
          How It Works
        </Link>
        <Link href="/" className="text-black font-semibold hover:text-blue-700">
          Our team
        </Link>
      </div>
      {loggedIn ? (
        // <div>
        //   <Image
        //     src={session.user.image}
        //     alt="User Profile"
        //     width={40}
        //     height={40}
        //     className="rounded-full"
        //   />
        // </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <Image
              src={img}
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <ChevronDown className="ml-2 text-gray-600" size={20} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-black font-satoshi">
                  {name}
                </p>
                <p className="text-xs text-gray-700">{email}</p>
              </div>
              <div className="">
                <button
                  onClick={handleGoogleSignOut}
                  className="w-full  px-4 py-2 bg-gradient-to-r from-[#001ECC]  to-[#5900FF] font-semibold  text-white   rounded-md font-space-grotesk font-grotesk transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="bg-gradient-to-r from-[#001ECC]  to-[#5900FF] font-semibold  text-white  py-2 px-6 rounded-md font-space-grotesk font-grotesk transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
        >
          Login
        </Link>
      )}
      {/* <Link
            href="/login"
            className="bg-gradient-to-r from-[#001ECC]  to-[#5900FF] font-semibold  text-white  py-2 px-6 rounded-md font-space-grotesk font-grotesk transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
          >
            Login
          </Link> */}
    </nav>
  );
}
