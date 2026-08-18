export const AppHeader = () => {
  return (
    <header className="h-header-height flex items-center justify-between p-4 shadow-sm">
      <p className="text-2xl font-bold text-gray-500">Interview Prep</p>
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted-foreground">Streak: n days</p>
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      </div>
    </header>
  )
}
