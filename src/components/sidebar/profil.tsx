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
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Profil = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  // if (user === undefined) return null; // loading
  // if (user === null) return null; // biar gak render dulu

  console.log("user tes:", user);


  useEffect(() => {
  const fetchUser = async () => {
    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
      console.log("USER DATA:", docSnap.data());
    } else {
      console.log("User tidak ditemukan");
    }
  };

  fetchUser();
}, [user]); 

  if (!mounted) return null;
  return (
    <div className="text-white/80 flex gap-2 items-center max-w-[370px] bg-primary-500 py-2 px-4 rounded-md fixed bottom-4 left-3 right-4 justify-between">
      {/* foto profil */}
      <div className="flex items-center gap-3 ">
        {/* avatar */}
        <div className="relative">
          <div className="relative h-10 w-10 rounded-full">
            
              <img
                src={userData?.photoURL}
                alt="profile"
                
                className="object-cover"
              />
           

            {/* status online */}
            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-primary-500 flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
          </div>
        </div>

        {/* user */}
        <div>
          {/* display name */}
          <h2 className="text-lg font-bold">{user?.displayName}</h2>
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
