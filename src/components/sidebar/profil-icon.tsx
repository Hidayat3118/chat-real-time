type ProfilIconProps = {
  name: string;
  photoURL?: string;
  onClick?: () => void;
  active?: boolean; // 🔥 tambahkan ini
};

export default function ProfilIcon({
  name,
  photoURL,
  onClick,
  active,
}: ProfilIconProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors
      ${
        active
          ? "bg-primary-500 text-white"
          : "hover:bg-zinc-700/50"
      }`}
    >
      <div className="w-9 h-9 rounded-full overflow-hidden bg-zinc-600">
        {photoURL && (
          <img
            src={photoURL}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <span className="text-sm md:text-base font-medium">{name}</span>
    </div>
  );
}