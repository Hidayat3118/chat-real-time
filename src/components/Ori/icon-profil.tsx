import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconType } from "react-icons/lib";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "../ui/dropdown-menu";
import { Slider } from "../ui/slider";
import TextProfil from "./text-profil";
import VoiceSetting from "./voiceSetting";

type ProfilSetProps = {
  icon: IconType;
  iconDua: IconType;
  textIcon: string;
};

const IconProfil = ({
  icon: Icon,
  iconDua: IconDua,
  textIcon,
}: ProfilSetProps) => {
 
  return (
    <div className="flex items-center ">
      {/* mic */}

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="hover:bg-primary-500 rounded-lg p-2 cursor-pointer">
            {/* props Icons */}
            <Icon className="text-xl" />
          </div>
        </TooltipTrigger>

        <TooltipContent className="text-base bg-primary-500">
          {textIcon}
        </TooltipContent>
      </Tooltip>

      {/* arrow mic*/}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="hover:bg-primary-600 py-1 rounded-md cursor-pointer group">
            <IconDua
            
              className={`group-data-[state=open]:rotate-180 text-2xl cursor-pointer `}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-primary-500 text-white border border-white/10 p-2">
          {/* text 1 */}
          <TextProfil text="Output Device" textDua="Microphome Array (AMD Audio Device)" />
          {/* text */}
          <TextProfil text="Input Profil" textDua="Custom" />

          {/* text kedua */}
          {/* slider */}
          <div className=" w-56 h-16 p-2">
            <p className="text-white mb-4 text-sm">Input Volume</p>
            <Slider
              defaultValue={[75]}
              max={100}
              step={1}
              className="mx-auto w-full max-w-xs [&_.bg-primary]:bg-indigo-500 cursor-pointer"
            />
          </div>
          {/* voice setting */}
          <div>
            <VoiceSetting text="Voice Settings"/>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default IconProfil;
