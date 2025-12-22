"use client";

import { Button } from "@/components/ui/button";
import LayoutAuth from "@/layout/layoutAuth";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  return (
    <LayoutAuth>
      <div className="w-full relative z-10 max-w-md bg-[#313338] rounded-lg p-8 shadow-xl animate-drop">
        <h1 className="text-white text-2xl font-semibold text-center mb-6">
          Create an account
        </h1>

        {/* Email */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Display Name */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Display Name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Username <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <Checkbox className="cursor-pointer" id="update" />
          <Label htmlFor="update" className="text-neutral-400">
            (Optional) It's okay to send me emails with Discord updates, tips,
            and special offers. You can opt out at any time.
          </Label>
        </div>

        {/* Button */}
        <Button className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer my-3 w-full ">
          Create Accont
        </Button>

        {/* Footer */}
        <p className="text-sm text-[#00A8FC] mt-4">
          <Link
            className="text-indigo-400 hover:text-indigo-500 "
            href="/login"
          >
            Already have an account?
          </Link>
        </p>
      </div>
    </LayoutAuth>
  );
}
