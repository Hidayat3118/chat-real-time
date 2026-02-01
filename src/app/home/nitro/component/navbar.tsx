"use client";

import Link from "next/link";
import { FaGift } from "react-icons/fa";
import { SiBlender } from "react-icons/si";

export default function NitroNavbar() {
  return (
    <nav className="flex items-center absolute top-0 left-0 right-0 z-50 justify-between px-4 h-16 text-primary-50 ">
      {/* Left */}
      <div className="flex items-center gap-8">
        <div className="font-bold text-xl">
          <SiBlender className="text-2xl" />
        </div>

        <div className="flex gap-6 text-sm font-semibold">
          <Link href="#" className="border-b-2 border-white pb-1">
            Home
          </Link>
          <Link href="#">What&apos;s New</Link>
          <Link href="#">Best of Nitro</Link>
          <Link href="#">Plans</Link>
          <Link href="#">Compare</Link>
        </div>
      </div>

      {/* Right */}
      <button className="flex items-center text-sm gap-2 bg-black/30 px-2 cursor-pointer py-2 rounded-lg  hover:bg-black/40 transition">
        <FaGift />
        Gift Nitro
      </button>
    </nav>
  );
}