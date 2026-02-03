import React, { useState } from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { IconType } from "react-icons/lib";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

type ProfilSetProps = {
  icon: IconType;
  iconDua: IconType;
}

const IconProfil = ({ icon: Icon, iconDua: IconDua }: ProfilSetProps) => {

  const [rotate, setRotate] = useState<boolean>(false); 
  return (
    <div className="flex items-center ">
      {/* mic */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:bg-primary-500 rounded-lg p-2 cursor-pointer">
              {/* props Icons */}
              <Icon className="text-xl" />
            </div>
          </TooltipTrigger>

          <TooltipContent>testing</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* arrow mic*/}
      <div className="hover:bg-primary-600 py-1 rounded-md">
        <IconDua
          onClick={() => setRotate(!rotate)}
          className={`text-xl cursor-pointer ${rotate ? "rotate-180" : ""}`}
        />
      </div>
    </div>
  );
};

export default IconProfil;
