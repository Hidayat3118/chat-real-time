'use client';

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5865F2]">
      
      {/* Card */}
      <div className="w-full max-w-md bg-[#313338] rounded-lg p-8 shadow-xl animate-drop">
        
        <h1 className="text-white text-2xl font-semibold text-center mb-6">
          Create an account
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            EMAIL <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full h-10 rounded-md bg-[#1E1F22] text-white px-3 outline-none focus:ring-2 focus:ring-[#5865F2]"
          />
        </div>

        {/* Display Name */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            DISPLAY NAME
          </label>
          <input
            type="text"
            className="w-full h-10 rounded-md bg-[#1E1F22] text-white px-3 outline-none focus:ring-2 focus:ring-[#5865F2]"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            USERNAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full h-10 rounded-md bg-[#1E1F22] text-white px-3 outline-none focus:ring-2 focus:ring-[#5865F2]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            PASSWORD <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full h-10 rounded-md bg-[#1E1F22] text-white px-3 outline-none focus:ring-2 focus:ring-[#5865F2]"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            DATE OF BIRTH <span className="text-red-500">*</span>
          </label>

          <div className="flex gap-2">
            <select className="flex-1 h-10 rounded-md bg-[#1E1F22] text-gray-400 px-3">
              <option>Month</option>
            </select>
            <select className="flex-1 h-10 rounded-md bg-[#1E1F22] text-gray-400 px-3">
              <option>Day</option>
            </select>
            <select className="flex-1 h-10 rounded-md bg-[#1E1F22] text-gray-400 px-3">
              <option>Year</option>
            </select>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-3">
          <input type="checkbox" className="mt-1" defaultChecked />
          <p className="text-xs text-gray-400">
            (Optional) It's okay to send me emails with Discord updates, tips, and
            special offers. You can opt out at any time.
          </p>
        </div>

        <div className="flex items-start gap-2 mb-6">
          <input type="checkbox" className="mt-1" />
          <p className="text-xs text-gray-400">
            I have read and agree to Discord's{" "}
            <span className="text-[#00A8FC] cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#00A8FC] cursor-pointer">
              Privacy Policy
            </span>.
          </p>
        </div>

        {/* Button */}
        <button className="w-full h-11 rounded-md bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition">
          Create Account
        </button>

        {/* Footer */}
        <p className="text-sm text-[#00A8FC] mt-4">
          <Link href="/login">Already have an account?</Link>
        </p>

      </div>
    </div>
  );
}
