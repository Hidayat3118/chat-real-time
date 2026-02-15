"use client";
import ServerSidebar from "./dashboard/server-sidebar";
import DMSidebar from "./dashboard/dm-sidebar";
import MainContent from "./dashboard/main-content";
import { PropsWithChildren } from "react";
import Profil from "@/components/sidebar/profil";
import { UserProvider } from "@/providers/userProvider";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex overflow-hidden w-full bg-primary-900">
      {/* User Provider */}
      <UserProvider>
        <ServerSidebar />
        <DMSidebar />
        <Profil />
        <MainContent>{children}</MainContent>
      </UserProvider>
    </div>
  );
}
