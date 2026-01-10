import { Input } from "@/components/ui/input";
import { AiFillShop } from "react-icons/ai";
import SidebarItem from "@/components/ui/sidebar-item";
import DMItem from "@/components/sidebar/dm-item";
import { IoLogoIonitron } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
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
  DialogDescription,
  DialogHeader,
  DialogClose
} from "@/components/ui/dialog";
export default function DMSidebar() {
  return (
    <aside className="w-96 bg-primary-900 text-zinc-200 flex flex-col">
      {/* Search */}
      <div className="p-3">
        <Input
          placeholder="Find or start a conversation"
          className="bg-primary-950 border-none text-sm"
        />
      </div>

      {/* Menu */}

      <div className="px-2 space-y-1">
        <SidebarItem active label="Friends" icon={<FaUserFriends />} />
        <SidebarItem
          label="Nitro"
          icon={<IoLogoIonitron className="text-2xl" />}
        />
        <SidebarItem label="Shop" icon={<AiFillShop className="text-xl" />} />
        <SidebarItem label="Guests" icon={<FaLeaf />} />
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
                    className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/5 cursor-pointer"
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
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/30 bg-transparent"
                    />
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
        <DMItem name="Nakja" />
        <DMItem name="RevanRach" />
        <DMItem name="eunlip" />
        <DMItem name="Giegie" />
      </div>
    </aside>
  );
}
