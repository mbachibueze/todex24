
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
       

        {/* main page */}
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}