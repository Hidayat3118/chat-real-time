"use client"

import {
  FiPhone,
  FiVideo,

  FiUserPlus,
  FiMoreHorizontal,
  FiPlus,
  FiGift,
  FiSmile,
  FiSearch,
} from "react-icons/fi"

import { IoChevronForward } from "react-icons/io5"

export default function Home() {
  return (
    <div className="h-screen flex bg-[#1e1f22] text-white overflow-hidden">

      {/* ================= LEFT SIDE ================= */}
      <div className="flex flex-col flex-1">

        {/* TOP BAR */}
        <div className="h-14 flex items-center justify-between px-6 border-b border-[#2b2d31]">

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-[15px]">Dayat</span>
          </div>

          <div className="flex items-center gap-6 text-gray-400">

            <FiPhone className="hover:text-white cursor-pointer" />
            <FiVideo className="hover:text-white cursor-pointer" />
            <FiUserPlus className="hover:text-white cursor-pointer" />
            <FiUserPlus className="hover:text-white cursor-pointer" />
            <FiMoreHorizontal className="hover:text-white cursor-pointer" />

            {/* SEARCH */}
            <div className="ml-6 relative">
              <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
              <input
                placeholder="Search dayat3118"
                className="bg-[#2b2d31] pl-8 pr-4 py-1.5 rounded-md text-sm outline-none placeholder-gray-400"
              />
            </div>

          </div>
        </div>

        {/* CHAT CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* PROFILE HEADER */}
          <div className="flex gap-6 mb-8">
            <img
              src="https://i.pravatar.cc/100"
              className="w-20 h-20 rounded-full"
            />

            <div>
              <h1 className="text-3xl font-bold">Dayat</h1>
              <p className="text-gray-400 text-lg">dayat3118</p>

              <p className="text-gray-400 mt-3 text-sm">
                This is the beginning of your direct message history with{" "}
                <span className="text-white font-semibold">Dayat</span>.
              </p>

              <div className="flex items-center gap-4 mt-4">

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      className="w-6 h-6 rounded-full border-2 border-[#1e1f22]"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      className="w-6 h-6 rounded-full border-2 border-[#1e1f22]"
                    />
                  </div>
                  <span>4 Mutual Servers</span>
                </div>

                <button className="bg-[#5865f2] hover:bg-[#4752c4] px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                  
                  Add Friend
                </button>

                <button className="bg-[#2b2d31] hover:bg-[#3a3c41] px-4 py-2 rounded-md text-sm font-medium">
                  Block
                </button>

              </div>
            </div>
          </div>

          {/* DATE */}
          <div className="text-center text-gray-500 text-xs my-6">
            17 Februari 2026
          </div>

          {/* MESSAGE */}
          <div className="flex gap-4 hover:bg-[#2b2d31]/40 p-3 rounded-md transition">
            <img
              src="https://i.pravatar.cc/50"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[15px]">
                  pacarnya changli
                </span>
                <span className="text-gray-500 text-xs">08.46</span>
              </div>
              <p className="text-gray-300 mt-1 text-[15px]">tes</p>
            </div>
          </div>

        </div>

        {/* MESSAGE INPUT */}
        <div className="p-4 border-t border-[#2b2d31]">
          <div className="flex items-center bg-[#383a40] rounded-lg px-4 py-3">
            <FiPlus className="text-gray-400 text-xl mr-4 hover:text-white cursor-pointer" />
            <input
              type="text"
              placeholder="Message @Dayat"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />
            <div className="flex items-center gap-5 text-gray-400 text-xl ml-4">
              <FiGift className="hover:text-white cursor-pointer" />
              <FiUserPlus className="hover:text-white cursor-pointer" />
              <FiSmile className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

      </div>

      {/* ================= RIGHT PROFILE PANEL ================= */}
      <div className="w-[340px] bg-[#232428] border-l border-[#2b2d31] flex flex-col">

        {/* COVER */}
        <div className="h-24 bg-[#3f4fa0] relative">
          <div className="absolute -bottom-10 left-6">
            <img
              src="https://i.pravatar.cc/100"
              className="w-20 h-20 rounded-full border-4 border-[#232428]"
            />
          </div>
        </div>

        {/* PROFILE INFO */}
        <div className="mt-14 px-6">

          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">Dayat</h2>
              <p className="text-gray-400 text-sm">dayat3118</p>
            </div>

            <div className="flex gap-3 text-gray-400 text-lg">
              <FiUserPlus className="hover:text-white cursor-pointer" />
              <FiMoreHorizontal className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* MEMBER SINCE */}
          <div className="bg-[#2b2d31] rounded-lg p-4 mt-6">
            <p className="text-xs text-gray-400 mb-1">Member Since</p>
            <p className="text-sm">May 16, 2023</p>
          </div>

          {/* MUTUAL */}
          <div className="bg-[#2b2d31] rounded-lg mt-4">

            <div className="flex items-center justify-between p-4 border-b border-[#3a3c41] hover:bg-[#3a3c41] cursor-pointer">
              <span className="text-sm">Mutual Servers — 4</span>
              <IoChevronForward />
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-[#3a3c41] cursor-pointer">
              <span className="text-sm">Mutual Friends — 1</span>
              <IoChevronForward />
            </div>

          </div>

        </div>

        <div className="mt-auto p-4 text-center text-sm text-gray-400 hover:text-white cursor-pointer border-t border-[#2b2d31]">
          View Full Profile
        </div>

      </div>

    </div>
  )
}
