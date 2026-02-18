"use client"

import { 
  HiPlus 
} from "react-icons/hi"

import { 
  BsGift, 
  BsEmojiSmile 
} from "react-icons/bs"

import { 
  MdGifBox 
} from "react-icons/md"

// import { 
//   RiSticker2Line 
// } from "react-icons/ri"

export default function ChatInput() {
  return (
    <div className="w-full bg-[#313338] p-4">
      <div className="flex items-center bg-[#383A40] rounded-full px-4 py-3">
        
        {/* Left Icon */}
        <button className="text-gray-400 hover:text-white transition mr-3">
          <HiPlus size={20} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Message @Dayat"
          className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400 text-sm"
        />

        {/* Right Icons */}
        <div className="flex items-center gap-4 ml-3 text-gray-400">
          <button className="hover:text-white transition">
            <BsGift size={20} />
          </button>

          {/* <button className="hover:text-white transition">
            <MdGifBox size={22} />
          </button> */}

          <button className="hover:text-white transition">
            <MdGifBox size={20} />
          </button>

          <button className="hover:text-white transition">
            <BsEmojiSmile size={20} />
          </button>
        </div>

      </div>
    </div>
  )
}
