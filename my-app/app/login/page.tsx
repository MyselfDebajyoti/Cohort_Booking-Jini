"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signInAction } from "@/app/_lib/actions";
// import { signIn, signOut } from "@/app/_lib/auth";
import { signIn } from "next-auth/react";

const LoginSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  const socialLoginOptions = [
    { name: "Google", icon: "/Google.svg" },
    { name: "LinkedIn", icon: "/devicon_linkedin.svg" },
    { name: "Instagram", icon: "/Group (1).svg" },
    { name: "Facebook", icon: "/devicon_facebook.svg" },
    { name: "X", icon: "/Group (2).svg" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login attempt with email:", email);
  };
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" }); // redirects to dashboard after login
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover p-4"
      style={{
        backgroundImage: "url('/Frame 41.png')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-4xl  p-6 md:p-8 border-2 border-[#828282]">
        <h2 className="text-2xl font-bold text-center mb-1 text-black font-satoshi">
          Create an account
        </h2>
        <p className="text-lg text-center text-black mb-8">
          Enter your Email to sign up for this app
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-[#DFDFDF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r font-semibold from-[#001ECC] cursor-pointer to-[#5900FF]  text-white py-2 rounded-lg   transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
          >
            Login
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-[#042CFF]">or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          {socialLoginOptions.map((social) => (
            <button
              key={social.name}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label={`Continue with ${social.name}`}
              onClick={handleGoogleSignIn}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
              />
            </button>
          ))}
        </div>

        <p className="text-xs text-center text-black mt-4">
          By clicking continue, you agree to our{" "}
          <a href="/terms" className="underline text-[#4400FF]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline text-[#4400FF]">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
