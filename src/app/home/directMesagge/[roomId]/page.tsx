"use client";

import TopBar from "../topBar";
import Chat from "../chat";
import ProfilChat from "../profilChat";

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col bg-primary-800 text-white">
      
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT CHAT */}
        <div className="flex-1 overflow-hidden">
          <Chat />
        </div>

        {/* RIGHT PROFILE */}
        <ProfilChat />

      </div>
    </div>
  );
}