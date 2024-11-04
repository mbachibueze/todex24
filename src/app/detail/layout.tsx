'use client'

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavBar";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          poppins.className,
          { "debug-screens": process.env.NODE_ENV === "development" }
        )}
      >
        {/* Sidebar */}
        <div
          className={cn(
            "h-full fixed left-0 top-0 z-10 transition-all duration-300 lg:w-[240px] md:w-[60px]"
          )}
        >
          <SideNavbar/>
        </div>

        {/* Main content area */}
        <div
          className={cn(
            "flex-grow h-screen overflow-y-auto transition-all duration-300 p-5 ml-[60px] lg:ml-[240px]"
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
