
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavBar";

import Image from "next/image";



const poppins = Poppins({
  subsets: ["latin"],

  weight: ["100", "200", "300", "400","500", "600", "700", "800", "900"], // Add the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          poppins.className,
          { "debug-screens": process.env.NODE_ENV === "development" }
        )}
      >
        {/* sidebar */}
        <div className="h-screen fixed sm:relative">
          <SideNavbar />
        </div>

        {/* main page */}
        <div className="ml-[60px] sm:ml-0 p-4 md:px-8 w-full overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}