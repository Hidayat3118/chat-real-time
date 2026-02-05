import React from "react";
import { IoIosSettings } from "react-icons/io";

type VoiceSettingProps = {
  text: string;
};
const VoiceSetting = ({ text } : VoiceSettingProps) => {
  return (
    <div
      className="w-58 h-14 rounded-lg py-3 flex items-center justify-between cursor-pointer 
                 hover:bg-[#2a2b2f]  transition-colors  px-2 gap-3"
    >
      {/* Left text */}
      <div className="flex flex-col">
        <span className="text-sm text-white mb-1">{text}</span>
      </div>

      {/* Arrow */}
      <IoIosSettings className="text-2xl text-white/70" />
    </div>
  );
};

export default VoiceSetting;
