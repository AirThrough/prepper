import { AppSidebar } from "@/widgets/AppSidebar"

export default function Home() {
  return (
    <div className="flex h-full">
      <AppSidebar />
      <main className="flex-1">
        <div className="h-full w-full">
          <h1 className="text-2xl font-bold">Welcome to the app</h1>
        </div>
      </main>
    </div>
  )
}
