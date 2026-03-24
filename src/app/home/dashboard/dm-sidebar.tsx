"use client";

import { Input } from "@/components/ui/input";
import { AiFillShop } from "react-icons/ai";
import SidebarItem from "@/components/ui/sidebar-item";
import ProfilIcon from "@/components/sidebar/profil-icon";
import { GiLaurels } from "react-icons/gi";
import { SiBlender } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, useParams } from "next/navigation";
import { query, where, onSnapshot } from "firebase/firestore";

export default function DMSidebar() {
  const [activeMenu, setActiveMenu] = useState<string>("friend");
  const [activeDM, setActiveDM] = useState<string | null>(null);

  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [chats, setChats] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const router = useRouter();
  const params = useParams();
  const roomId = params?.roomId as string | undefined;

  const menuItems = [
    {
      id: "friend",
      label: "Friends",
      icon: <FaUserFriends />,
      href: "/home/friend",
    },
    {
      id: "nitro",
      label: "Nitro",
      icon: <SiBlender className="text-2xl" />,
      href: "/home/nitro",
    },
    {
      id: "shop",
      label: "Shop",
      icon: <AiFillShop className="text-xl" />,
      href: "/home/shop",
    },
    {
      id: "guests",
      label: "Guests",
      icon: <GiLaurels />,
      href: "/home/guests",
    },
  ];

  const toggleUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };
  // 🔹 ambil user login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  //  baru

  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUser.uid),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setChats(data);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const chatUserIds = [
    ...new Set(
      chats.map((chat) =>
        chat.participants.find((id: string) => id !== currentUser.uid),
      ),
    ),
  ];

  // 🔹 ambil semua user
  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(data);
    };

    fetchUsers();
  }, []);

  // 🔹 set active berdasarkan URL (persist saat refresh)
  useEffect(() => {
    if (!roomId || !currentUser) return;

    const [id1, id2] = roomId.split("_");
    const otherUserId = currentUser.uid === id1 ? id2 : id1;

    setActiveDM(otherUserId);
  }, [roomId, currentUser]);

  // 🔹 mulai chat
  const startChat = (friendId: string) => {
    const roomId = [currentUser.uid, friendId].sort().join("_");

    setActiveDM(friendId);
    router.push(`/home/directMesagge/${roomId}`);
  };

  if (!currentUser) return <div>Harus login dulu</div>;

  return (
    <aside className="w-[400px] bg-primary-900 text-zinc-200 flex flex-col">
      {/* Search */}
      <button className="px-3 py-2 mx-2 my-4 bg-primary-800 rounded-lg text-sm font-semibold cursor-pointer hover:bg-primary-500">
        Find or start a conversation
      </button>

      {/* Menu */}
      <div className="px-2 space-y-1">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.id}>
            <SidebarItem
              label={item.label}
              icon={item.icon}
              active={activeMenu === item.id}
              onClick={() => setActiveMenu(item.id)}
            />
          </Link>
        ))}
      </div>

      {/* DM Header */}
      <div className="mt-4 px-6 text-base text-zinc-400 flex justify-between font-semibold">
        <span className="hover:text-white cursor-pointer">Direct Message</span>

        <Dialog>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger asChild>
                <button className="p-1 rounded cursor-pointer">
                  <FiPlus className="text-xl" />
                </button>
              </TooltipTrigger>
            </DialogTrigger>

            <DialogContent className="bg-primary-700 text-white max-w-md p-0 gap-0 border border-white/10">
              <div className="px-6 pt-6 pb-4">
                <DialogTitle className="text-xl ">
                  <p className="font-semibold mb-4">New Message</p>
                  <p className="text-base text-primary-200">
                    {" "}
                    You can add 9 more friends.
                  </p>
                </DialogTitle>
              </div>

              <div className="px-6 py-2">
                <Input
                  placeholder="Serach for friends or servers members"
                  className="w-full bg-primary-800 border border-white/12 py-5"
                />
              </div>

              <div className="px-2 h-[500px] overflow-y-auto">
                {users
                  .filter((u) => chatUserIds.includes(u.id))
                  .map((u) => (
                    <div
                      key={u.id}
                      onClick={() => toggleUser(u.id)}
                      className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/5 cursor-pointer"
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white/20 overflow-hidden">
                          {u.photoURL && (
                            <img
                              src={u.photoURL}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <p className="text-sm font-medium">{u.userName}</p>
                      </div>

                      {/* RIGHT */}
                      <Checkbox
                        className="cursor-pointer"
                        checked={selectedUsers.includes(u.id)}
                        onCheckedChange={(checked) => {
                          toggleUser(u.id);
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  ))}
              </div>

              <div className="flex gap-3 px-6 py-4 border-t border-white/10 bg-[#1e1f22]">
                <DialogClose asChild>
                  <button className="w-full h-12 bg-white/5 hover:bg-white/10 rounded-md">
                    Cancel
                  </button>
                </DialogClose>
                <button className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 rounded-md">
                  Create DM
                </button>
              </div>
            </DialogContent>

            <TooltipContent className="bg-primary-600 py-2 px-3 rounded-md">
              <p className="text-sm">Create DM</p>
            </TooltipContent>
          </Tooltip>
        </Dialog>
      </div>

      {/* DM LIST */}
      <div className="px-2 mt-2 space-y-1">
        {users
          .filter((u) => chatUserIds.includes(u.id))
          .map((u) => (
            <ProfilIcon
              key={u.id}
              name={u.userName}
              photoURL={u.photoURL}
              active={activeDM === u.id}
              onClick={() => startChat(u.id)}
            />
          ))}
      </div>
    </aside>
  );
}
