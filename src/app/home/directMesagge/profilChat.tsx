import React from 'react'
import {
  FiPhone,
  FiVideo,
  FiUserPlus,
  FiMoreHorizontal,
  FiPlus,
  FiGift,
  FiSmile,
  FiSearch,
} from "react-icons/fi";

import { IoChevronForward } from "react-icons/io5";

const ProfilChat = () => {
  return (
    <div className="w-[370px] bg-[#232428] border-l border-[#2b2d31] flex flex-col">
          {/* COVER */}
          <div className="h-32 bg-[#3f4fa0] relative">
            <div className="absolute -bottom-10 left-6">
              <img
                src="https://i.pravatar.cc/100"
                className="w-24 h-24 rounded-full border-6 border-primary-500"
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
  )
}

export default ProfilChat