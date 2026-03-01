"use client";

import { FiPlus } from "react-icons/fi";
import { FaGift } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { BiSolidShapes } from "react-icons/bi";
import { FaFaceGrinSquint } from "react-icons/fa6";
import { FaNoteSticky } from "react-icons/fa6";
import IconHover from "./iconHover";

export default function ChatInput() {
  return (
    <div className="p-4 mb-13">
      <div className="flex items-center bg-primary-500 rounded-lg px-4 py-4 h-[59px] border border-white/5">
        <FiPlus className="text-gray-400 text-xl mr-4 hover:text-white cursor-pointer" />
        <input
          type="text"
          placeholder="Message @Dayat"
          className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
        />
        <div className="flex items-center gap-5 text-gray-400 text-xl ml-4">
          {/* <FaGift className="hover:text-white cursor-pointer" /> */}
          <IconHover textContent="Gift" Icon={<FaGift className="hover:text-white cursor-pointer" />} />
          <IconHover textContent="GIF" Icon={<MdGifBox className="hover:text-white cursor-pointer text-2xl" />} />
          <IconHover textContent="Note" Icon={<FaNoteSticky className="hover:text-white cursor-pointer" />} />
          <IconHover textContent="Emoji" Icon={<FaFaceGrinSquint className="hover:text-white cursor-pointer" />} />
          <IconHover textContent="Shapes" Icon={<BiSolidShapes className="hover:text-white cursor-pointer" />} />
        </div>
      </div>
    </div>
  );
}
