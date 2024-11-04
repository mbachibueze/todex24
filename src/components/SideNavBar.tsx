"use client";

import { useState, useEffect } from "react";
import { Nav } from "./ui/nav";
import Image from "next/image";

import {
  Waypoints, 
  Activity, 
  LayoutDashboard, 
  User, 
  Settings, 
  LogOut,
} from "lucide-react";

import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed by default
  const screenWidth = useWindowWidth();

  useEffect(() => {
    // Expand sidebar on 'lg' screens (1024px and above), collapse on smaller screens
    setIsCollapsed(screenWidth < 1024);
  }, [screenWidth]);

  return (
    <div
      className={`relative flex flex-col h-screen gap-7 border-r pt-5 pb-10 transition-all duration-300 ${
        isCollapsed ? "w-[60px] px-1" : "w-[240px] px-3"
      }`}
    >
      {/* Logo */}
      <div className="p-2">
        {isCollapsed ? (
          <Image src="/images/miniBlue.svg" alt="Logo" width={30} height={100} className="pl-2" />
        ) : (
          <Image src="/images/logoBlue.svg" alt="Logo" width={130} height={100} className="px-3" />
        )}
      </div>

      {/* Navigation Links */}
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/detail/dashboard",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Transactions",
            href: "/detail/transactions",
            icon: Activity,
            variant: "ghost",
          },
          {
            title: "Trades",
            href: "/detail/trades",
            icon: Waypoints,
            variant: "ghost",
          },
          {
            title: "Users",
            href: "/detail/users",
            icon: User,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/detail/settings",
            icon: Settings,
            variant: "ghost",
          },
          {
            title: "Log Out",
            href: "/",
            icon: LogOut,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
