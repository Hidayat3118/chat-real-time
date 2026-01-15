
const RightSidebar = () => {
  return (
    <div className="col-start-4 row-start-2 row-span-10 h-full border-l border-white/5">
      <div className="flex-1 h-screen bg-primary-800 text-white p-6">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-6">Active Now</h2>

        {/* Empty state */}
        <div className="flex flex-col justify-center text-center">
          <p className="text-base font-medium mb-2">It's quiet for now...</p>
          <p className="text-sm text-zinc-400 max-w-xs">
            When a friend starts an activity—like playing a game or hanging out
            on voice—we'll show it here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
