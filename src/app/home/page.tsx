import ServerSidebar from "@/components/server-sidebar"
import DMSidebar from "@/components/dm-sidebar"
import MainContent from "@/components/main-content"

export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden">
      <ServerSidebar />
      <DMSidebar />
      <MainContent />
    </div>
  )
}
