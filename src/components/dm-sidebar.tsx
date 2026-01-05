import { Input } from "@/components/ui/input";
import { AiFillShop } from "react-icons/ai";
import SidebarItem from "@/components/ui/sidebar-item";
import DMItem from "./ui/dm-item";
import { IoLogoIonitron } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
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
        <SidebarItem active label="Guests" icon={<FaLeaf />} />
      </div>

      {/* DM List */}
      <div className="mt-4 px-2 text-sm text-zinc-400">Direct Message</div>

      <div className="px-2 mt-2 space-y-1">
        <DMItem name="Nakja" />
        <DMItem name="RevanRach" />
        <DMItem name="eunlip" />
        <DMItem name="Giegie" />
      </div>
    </aside>
  );
}
