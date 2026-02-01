import React from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { IconType } from "react-icons/lib";
import { MdKeyboardArrowUp } from "react-icons/md";

type Props = {
  Icon: IconType;
};

const ProfilSet = ({ Icon }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {" "}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:bg-primary-500 rounded-lg p-2 cursor-pointer">
              <Icon size={24} />
            </div>
          </TooltipTrigger>

          <TooltipContent>testing</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* arrow */}
      <MdKeyboardArrowUp className="text-xl" />
    </div>
  );
};

export default ProfilSet;
