import IconApp from "@/components/sidebar/icon-app";
import Image from "next/image";
import { FaCompass } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

export default function ServerSidebar() {
  return (
    <aside className="w-[72px] bg-primary-900 flex flex-col items-center py-3 gap-3">
      {/* Discord Logo */}
      <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold">
        <Image width={30} height={30} alt="icon discord" src="/discord.png" />
      </div>

      <IconApp />
      <IconApp />
      <IconApp />

      {/* Add Server */}
      <div className="w-20 flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
          <AiFillPlusCircle size={20} />
        </div>

        <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
          <FaCompass size={20} />
        </div>
      </div>
    </aside>
  );
}
