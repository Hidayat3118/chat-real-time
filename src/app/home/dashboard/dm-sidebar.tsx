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

// login chat
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { UserProvider } from "@/providers/userProvider";

export default function DMSidebar() {
  const [activeMenu, setActiveMenu] = useState<string>("friend");
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

  // logic

  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const router = useRouter();

  // ambil user login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  // ambil semua user
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

  // mulai chat
  const startChat = (friendId: string) => {
    const roomId = [currentUser.uid, friendId].sort().join("_");
    router.push(`/testing/chat/${roomId}`);
  };

  if (!currentUser) return <div>Harus login dulu</div>;
  console.log("current user:", currentUser);

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

      {/* DM List */}
      <div className="mt-4 px-6 text-base text-zinc-400 flex justify-between font-semibold">
        <span className="hover:text-white cursor-pointer">Direct Message</span>
        <Dialog>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger className="" asChild>
                <button className="p-1 rounded cursor-pointer">
                  <FiPlus className="text-xl" />
                </button>
              </TooltipTrigger>
            </DialogTrigger>
            <DialogContent className="bg-primary-700 text-white max-w-md p-0 gap-0 border border-white/10">
              {/* Header */}
              <div className="px-6 pt-6 pb-4 ">
                <DialogTitle className="text-xl text-white font-semibold">
                  Select Friends
                </DialogTitle>
                <p className="text-base text-white/60 mt-1">
                  You can add 9 more friends.
                </p>
              </div>
              {/* Search */}
              <div className="px-6 py-2">
                <Input
                  type="text"
                  placeholder="Type the username of a friend"
                  className="w-full rounded-md placeholder:text-base bg-primary-800 border border-white/12 px-3 py-6 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              {/* Friend List */}
              <div className="px-2 h-[500px] overflow-y-auto ">
                {[
                  { name: "Nakja", username: "you.watan" },
                  { name: "RevanRach", username: "revanrach" },
                ].map((user) => (
                  <div
                    key={user.username}
                    className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/5 cursor-pointer pr-6"
                  >
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-9 h-9 rounded-full bg-white/20" />
                      {/* Name */}
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-white/50">{user.username}</p>
                      </div>
                    </div>
                    {/* Checkbox */}
                    <Checkbox className="border border-white/40 h-5 w-5 cursor-pointer" />
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-[#1e1f22]">
                <DialogClose asChild>
                  <button className="w-full h-12 cursor-pointer text-base rounded-md bg-white/5 hover:bg-white/10 ">
                    Cancel
                  </button>
                </DialogClose>
                <button className="w-full h-12 cursor-pointer text-base rounded-md bg-indigo-500 hover:bg-indigo-600  font-medium">
                  Create DM
                </button>
              </div>
            </DialogContent>
            <TooltipContent className="bg-primary-600 py-2 px-3 rounded-md border border-white/5 ">
              <p className="text-sm">Create DM</p>
            </TooltipContent>
          </Tooltip>
        </Dialog>
      </div>
      <div className="px-2 mt-2 space-y-1">
        {/* profil teman */}

        {users
          .filter((user) => user.id !== currentUser.uid)
          .map((user) => (
            <ProfilIcon
              key={user.id}
              onClick={() => startChat(user.id)}
              name={user.userName}
            />
          ))}
      </div>
    </aside>
  );
}
