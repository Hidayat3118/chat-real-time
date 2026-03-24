"use client";

import { useEffect, useState, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { UserContext } from "@/providers/userProvider";

import { FiUserPlus, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { TiPin } from "react-icons/ti";
import { useParams } from "next/navigation";

type UserData = {
  displayName: string;
  userName: string;
  photoURL: string;
};

const TopBar = () => {
  const { user } = useContext(UserContext);
  const params = useParams();
  const roomId = params.roomId as string;
  const [otherUserData, setOtherUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user || !roomId) return;
    const ids = roomId.split("_");
    const otherUserId = ids.find((id) => id !== user.uid);
    if (!otherUserId) return;
    const fetchOtherUser = async () => {
      const docSnap = await getDoc(doc(db, "users", otherUserId));
      if (docSnap.exists()) setOtherUserData(docSnap.data() as UserData);
    };
    fetchOtherUser();
  }, [user, roomId]);

  return (
    <div className="h-14 flex items-center justify-between px-6 border-b border-[#2b2d31]">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          {otherUserData?.photoURL && (
            <img
              src={otherUserData.photoURL}
              alt={otherUserData.displayName}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <span className="font-semibold text-lg">
          {otherUserData?.displayName || otherUserData?.userName || "-"}
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6 text-gray-400 text-xl">
        <FaPhoneVolume className="hover:text-white cursor-pointer" />
        <BsFillCameraVideoFill className="hover:text-white cursor-pointer" />
        <TiPin className="hover:text-white text-3xl cursor-pointer" />
        <FiUserPlus className="hover:text-white cursor-pointer text-2xl" />
        <FiMoreHorizontal className="hover:text-white cursor-pointer" />

        <div className="ml-6 relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
          <input
            placeholder={`Search ${otherUserData?.displayName || ""}`}
            className="bg-[#2b2d31] pl-8 pr-4 py-1.5 rounded-md text-sm outline-none placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
