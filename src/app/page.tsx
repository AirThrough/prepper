import { SidebarProvider } from "@/shared/ui"
import { AppSidebar } from "@/widgets/AppSidebar"

export default function Home() {
  return (
    <SidebarProvider className="h-[calc(100vh-var(--spacing-header-height))] min-h-0">
      <AppSidebar />
      <main className="flex-1">
        <div className="h-full w-full">
          <h1 className="text-2xl font-bold">Welcome to the app</h1>
        </div>
      </main>
    </SidebarProvider>
  )
}
