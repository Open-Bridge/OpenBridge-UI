
import type { Metadata } from 'next'
import localFont from "next/font/local";
import { Questrial } from "next/font/google";
import { Inter } from 'next/font/google'
import EthProvider, { Providers } from '../provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

const NeueHaasDisplay = localFont({
  variable: "--font-neuehaas",
  src: [
    {
      path: "./neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: 'Open Bridge',
  description: 'Cross Chain Protocol for Every One',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <EthProvider>
          <body  className={`${questrial.className} relative`}>{children}</body>
        </EthProvider>
    </html>
  )
}
