import { ReactNode } from "react";
export default function SidebarItem({
  label,
  active,
  icon,
  onClick,
}: {
  label: string;
  active?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-zinc-800 text-white" : "hover:bg-zinc-700/50"
      }`}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
