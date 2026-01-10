import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const IconApp = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="w-11 h-11 cursor-pointer rounded-xl flex overflow-hidden bg-primary-600 items-center justify-center text-white font-bold">
          <Image
            width={50}
            height={50}
            alt="icon discord"
            src="/cibi.jpg"
            className="object-cover"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-primary-600" side="right">Testing aja sih</TooltipContent>
    </Tooltip>
  );
};

export default IconApp;
