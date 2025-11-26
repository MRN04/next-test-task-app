import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/SideBar";
import { Providers } from "@/lib/providers";
import { MobileHeader } from "@/components/MobileHeader";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TESTAPP",
  description: "Test Task App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex h-screen overflow-hidden`}
        suppressHydrationWarning
      >
        <Providers>
          <SideBar />
          <div className="flex-1 bg-light-bg w-full overflow-hidden flex flex-col">
            <MobileHeader />
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
