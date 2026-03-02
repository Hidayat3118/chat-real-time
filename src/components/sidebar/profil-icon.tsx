type ProfilIconProps = {
  name: string;
  onClick?: () => void;
};

export default function ProfilIcon({ name, onClick }: ProfilIconProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-700/50 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-zinc-600" />
      <span className="text-sm">{name}</span>
    </div>
  );
}
