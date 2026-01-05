export default function DMItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-700/50 cursor-pointer">
      <div className="w-8 h-8 rounded-full bg-zinc-600" />
      <span className="text-sm">{name}</span>
    </div>
  );
}
