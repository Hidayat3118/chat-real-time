"use client";
import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoHeadset } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import IconProfil from "../Ori/icon-profil";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserContext } from "@/providers/userProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const Profil = () => {
  const { user, setUser } = useContext(UserContext);
  // const router = useRouter();
  // useEffect(() => {
  //   if (user === null) {
  //     router.push("/login");
  //   }
  // }, [user]);

  // if (!user) return null;

  // userProvider

  console.log("user tes:", user);

  return (
    <div className="text-white/80 flex gap-2 items-center max-w-[370px] bg-primary-500 py-2 px-4 rounded-md fixed bottom-4 left-3 right-4 justify-between">
      {/* foto profil */}
      <div className="flex items-center gap-3 ">
        {/* avatar */}
        <div className="relative">
          <div className=" h-10 w-10 rounded-full overflow-hidden ">
            <Image src="/biniaing.png" width={100} height={100} alt="profil" />

            {/* status online */}
            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-primary-500 flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
          </div>
        </div>

        {/* user */}
        <div>
          {/* display name */}
          <h2 className="text-sm font-bold">{user?.displayName}</h2>
          <p className="text-xs">Online</p>
        </div>
      </div>

      {/* icon */}
      <div className="flex items-center">
        {/*  */}
        <IconProfil
          textIcon="Mute"
          iconDua={MdKeyboardArrowDown}
          icon={FaMicrophone}
        />
        {/* headset */}
        <IconProfil
          textIcon="Deafen"
          iconDua={MdKeyboardArrowDown}
          icon={IoHeadset}
        />
        {/* setting */}
        <div className="flex items-center ">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:bg-primary-500 rounded-lg p-2 cursor-pointer">
                {/* props Icons */}
                <IoIosSettings className="text-2xl" />
              </div>
            </TooltipTrigger>

            <TooltipContent className="text-base bg-primary-500">
              Settings
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Profil;
