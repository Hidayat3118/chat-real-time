import React from "react";
import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoHeadset } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
const Profil = () => {
  return (
    <div className="text-white/80 flex gap-8 items-center">
      {/* foto profil */}
      <div className="flex items-center gap-2">
        <div className="bg-red-400 rounded-full overflow-hidden h-12 w-12">
          <Image
            src="/profil.jpg"
            width={100}
            height={100}
            alt="Discord Logo"
          />
        </div>
        {/* user */}
        <div>
          <h2 className="text-sm font-bold">Pacar Changli</h2>
          <p className="text-xs">Online</p>
        </div>
      </div>
      {/* icon */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          {/* mic */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="hover:bg-primary-500 rounded-lg p-2 cursor-pointer">
                  <FaMicrophone className="text-lg" />
                </div>
              </TooltipTrigger>

              <TooltipContent>testing</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* arrow */}
          <MdKeyboardArrowUp className="text-xl" />
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <div>
            <IoHeadset className="text-lg" />
          </div>
          <MdKeyboardArrowUp className="text-xl" />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <IoIosSettings className="text-2xl" />
          </div>
          <MdKeyboardArrowUp className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
