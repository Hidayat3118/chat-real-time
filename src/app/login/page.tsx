"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 relative overflow-hidden flex items-center justify-center">
      {/* Background particles/stars effect */}
      <div className="absolute inset-0 overflow-hidden"></div>

      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20" />

      {/* Discord Logo */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <svg width="36" height="36" viewBox="0 0 71 55" fill="none">
          <path
            d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
            fill="white"
          />
        </svg>
        <span className="text-white text-xl font-bold">Discord</span>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-neutral-700 rounded-lg shadow-2xl p-8 w-full max-w-3xl mx-4">
        <div className="grid grid-cols-10 justify-between items-start ">
          {/* Left side - Login Form */}
          <div className="flex-1 w-full md:w-auto col-span-6 pr-6">
            <div className="text-center">
              <h2 className="text-white text-2xl font-bold mb-2">
                Welcome back!
              </h2>
              <p className="text-gray-300 text-md mb-6">
                We're so excited to see you again!
              </p>
            </div>
            {/* konten input */}
            <div className="space-y-4">
              {/* email */}
              <div>
                <label className="block text-neutral-200 text-md font-semibold mb-2">
                  Email or Phone Number <span className="text-red-500">*</span>
                </label>
                <Input className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              {/* password */}
              <div className="">
                <label className="block text-neutral-200 text-md font-semibold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                {/* <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-neutral-800 text-white rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                /> */}
                <Input className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              {/* text and button login */}
              <div className="grid">
                <a
                  href="#"
                  className="text-indigo-400 text-sm hover:underline inline-block -mt-3 mb-3"
                >
                  Forgot your password?
                </a>
                {/* button login */}
                <Button className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer my-3 ">
                  Log In
                </Button>
                <p className="text-gray-400 text-sm">
                  Need an account?{" "}
                  <a href="#" className="text-indigo-400 hover:underline">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="col-span-4 items-center text-center">
            <div className="pl-4 ">
              <div className="flex justify-center p-4 rounded-lg mb-4">
                <Image
                  src="/qrcode.PNG"
                  width={170}
                  height={170}
                  alt="qrcode"
                />
              </div>

              <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                Log in with QR Code
              </h3>
              <p className="text-gray-300 text-md font-semibold">
                Scan this with the{" "}
                <span className="font-semibold">Discord mobile app</span> to log
                in instantly.
              </p>

              <button className="text-indigo-400 text-sm hover:underline mt-3 cursor-pointer">
                Or, sign in with passkey
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
