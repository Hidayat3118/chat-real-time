import IconApp from "@/components/sidebar/icon-app";
import Image from "next/image";
export default function ServerSidebar() {
  return (
    <aside className="w-[72px] bg-primary-900 flex flex-col items-center py-3 gap-3">
      {/* Discord Logo */}
      <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white font-bold">
        <Image width={30} height={30} alt="icon discord" src="/discord.png" />
      </div>

      <IconApp />
      <IconApp />
      <IconApp />

      {/* Add Server */}
      <div className="w-12 h-12 rounded-full bg-primary-800 text-green-500 flex items-center justify-center text-xl">
        +
      </div>
    </aside>
  );
}
