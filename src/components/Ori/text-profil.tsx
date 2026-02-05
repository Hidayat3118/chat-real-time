import React from "react";
import { IoIosArrowForward } from "react-icons/io";
type TextProfilProps = {
  text: string;
  textDua: string;
};

const TextProfil = ({ text, textDua }: TextProfilProps) => {
  return (
    <div
      className="w-58 group rounded-lg py-3 flex items-center justify-between cursor-pointer 
              hover:bg-[#2a2b2f] transition-colors  px-2 gap-3"
    >
      {/* Left text */}
      <div className="flex flex-col">
        <span className="text-sm text-white mb-1">{text}</span>
        <span className="text-xs text-white/50">
         {textDua}
        </span>
      </div>

      {/* Arrow */}
      <IoIosArrowForward className="text-xl text-white/50 group-hover:text-white" />
    </div>
  );
};

export default TextProfil;
