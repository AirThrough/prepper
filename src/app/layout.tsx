import type { Metadata } from "next"
import { Instrument_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { cn } from "@/shared/lib/utils"
import { AppHeader } from "@/widgets/AppHeader"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "Prepper",
  description: "Interview preparation app",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        instrumentSans.variable,
        outfit.variable,
      )}
    >
      <body className="flex flex-col min-h-svh">
        <AppHeader />
        <div className="flex-1 min-h-0 overflow-hidden relative">
          {children}
        </div>
      </body>
    </html>
  )
}
