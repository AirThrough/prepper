import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
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
      <body>
        <AppHeader />
        <div className="min-h-full overflow-hidden">{children}</div>
      </body>
    </html>
  )
}
