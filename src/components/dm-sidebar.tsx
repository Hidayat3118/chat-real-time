import { Input } from "@/components/ui/input"

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
        <SidebarItem active label="Friends" />
        <SidebarItem label="Nitro" />
        <SidebarItem label="Shop" />
      </div>

      {/* DM List */}
      <div className="mt-4 px-2 text-sm text-zinc-400">
        Direct Message
      </div>

      <div className="px-2 mt-2 space-y-1">
        <DMItem name="Nakja" />
        <DMItem name="RevanRach" />
        <DMItem name="eunlip" />
        <DMItem name="Giegie" />
      </div>
    </aside>
  )
}

function SidebarItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`px-3 py-2 rounded-md cursor-pointer ${
        active
          ? "bg-zinc-800 text-white"
          : "hover:bg-zinc-700/50"
      }`}
    >
      {label}
    </div>
  )
}

function DMItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-700/50 cursor-pointer">
      <div className="w-8 h-8 rounded-full bg-zinc-600" />
      <span className="text-sm">{name}</span>
    </div>
  )
}
