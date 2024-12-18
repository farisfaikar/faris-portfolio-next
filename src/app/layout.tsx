import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
// import ParticlesBackground from "@/components/effectui/particles-background"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Full Stack Web Developer, Software Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [{
      url: "/opengraph-image.webp",
      width: 1200,
      height: 630,
      alt: `${DATA.name}'s logo`
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: [{
      url: "/twitter-image.webp",
      width: 1200,
      height: 630,
      alt: `${DATA.name}'s logo`
    }],
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto min-h-screen bg-background px-0 py-0 font-sans antialiased",
          fontSans.variable,
        )}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {/* <ParticlesBackground /> */}
            <div className="flex min-h-screen w-full flex-col space-y-10 px-10 pb-5 pt-12">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
