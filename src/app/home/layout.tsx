import ServerSidebar from "./dashboard/server-sidebar";
import DMSidebar from "./dashboard/dm-sidebar";
import MainContent from "./dashboard/main-content";
import { PropsWithChildren } from "react";


export default function Layout({children} : PropsWithChildren) {
  return (
    <div className="h-screen flex overflow-hidden w-full bg-primary-900">
      <ServerSidebar />
      <DMSidebar />
      
      <MainContent>{children}</MainContent>
    </div>
  );
}
