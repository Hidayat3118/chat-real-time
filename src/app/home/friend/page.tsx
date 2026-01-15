import { TbMessageCirclePlus } from "react-icons/tb";
import { Search } from "lucide-react";
import Image from "next/image";
import { TbMessageCircleFilled } from "react-icons/tb";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import RightSidebar from "../dashboard/right-sidebar";

export default function Friend() {
  return (
    <div className="grid grid-cols-4 grid-rows-[56px_1fr] bg-primary-800 w-full h-full ">
      {/* Header */}
      <div className="col-span-4 border-b border-white/10 px-4 flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-3 bg-[#1e1f22] px-2 py-2 rounded-md w-fit">
          <Image height={20} width={20} alt="icon" src="/icon.png" />
          {/* Friends */}
          <span className="text-white font-semibold text-sm">Friends</span>

          {/* Tabs */}
          <div className="flex items-center gap-2 ml-2">
            <button className="px-3 py-2 rounded-md bg-[#2b2d31] text-white text-sm">
              Online
            </button>
            <button className="px-3 py-2 rounded-md text-gray-400 hover:bg-[#2b2d31] hover:text-white text-sm">
              All
            </button>
          </div>

          {/* Add Friend */}
          <button className="ml-2 px-4 py-2 rounded-md bg-[#5865f2] text-white text-sm font-medium">
            Add Friend
          </button>
        </div>
        {/* right */}

        <div className="pr-6">
          <TbMessageCirclePlus className="text-white font-semibold text-2xl" />
        </div>
      </div>

      {/* Main content */}
      <div className="col-span-3 p-4 text-white">
        <div className="flex items-center gap-2 bg-primary-800 rounded-md px-3 py-2 mb-4 border border-neutral-700">
          <Search size={16} className="text-neutral-200" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full placeholder:text-zinc-400"
          />
        </div>

        {/* Online label */}
        <p className="text-xs text-neutral-300 font-semibold mb-2">
          Online — 1
        </p>

        {/* User item */}
        <div className="flex group items-center gap-3 p-2 rounded-md hover:bg-primary-700 cursor-pointer border-t border-white/10 py-4">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">RevanRach</p>
            <p className="text-xs text-zinc-400 truncate">Ralie...</p>
          </div>
          <div className="flex gap-2 text-zinc-400 items-center">
            {/* icon pesan */}
            <button
              className="group-hover:bg-primary-900 h-10 w-10 cursor-pointer 
            rounded-full flex justify-center items-center"
            >
              <TbMessageCircleFilled className="text-2xl" />
            </button>
            {/* icon titik 3  */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="text-xl font-semibold group-hover:bg-primary-900 h-10 w-10 cursor-pointer
             rounded-full flex justify-center items-center"
                >
                  ⋮
                </button>
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                align="start"
                sideOffset={8}
                className="w-52 rounded-lg bg-primary-700 p-1 shadow-lg border border-[#1f2023] "
              >
                <div className="flex gap-1 flex-col text-sm font-semibold text-gray-200">
                  <button className="px-3 cursor-pointer py-2 text-left rounded hover:bg-[#2b2d31]">
                    Start Video Call
                  </button>

                  <button className="px-3 cursor-pointer py-2 text-left rounded hover:bg-[#2b2d31]">
                    Start Voice Call
                  </button>

                  <button className="px-3 cursor-pointer py-2 text-left rounded text-red-400 hover:bg-red-500/10">
                    Remove Friend
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>


      {/* Right sidebar */}
      <RightSidebar />
    </div>
  );
}
