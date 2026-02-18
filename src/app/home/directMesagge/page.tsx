"use client";

import TopBar from "./topBar";
import Chat from "./chat";
import ProfilChat from "./profilChat";

export default function DirectMeassage() {
  return (
    <div className="bg-primary-800 text-white">
      {/* TOP BAR */}
      <TopBar />

      <div className="min-h-screen flex  text-white">
        {/* ================= LEFT SIDE CHAT ================= */}
        <Chat />

        {/* ================= RIGHT PROFILE PANEL ================= */}
        <ProfilChat />
      </div>
    </div>
  );
}
