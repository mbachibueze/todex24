'use client'

import { useState } from "react";
import { Nav } from "./ui/nav";
import Image from "next/image";



import {
  Waypoints, 
  Activity, 
  LayoutDashboard, 
  User, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Menu
} from "lucide-react"

import {
  useWindowWidth,
} from '@react-hook/window-size'

import { Button } from "./ui/button";

type Props = {}

export default function SideNavbar({}: Props) {

  const [isCollapsed, setIsCollapsed] = useState(false)
 
  const onlyWidth = useWindowWidth()
  const mobileWidth = onlyWidth < 754

  const toggleSidebar =() =>{
    setIsCollapsed(!isCollapsed)
  }

  return(

      <div className="relative flex flex-col h-screen gap-7 border-r md:px-3 px-1 pt-5 pb-10">
        {! mobileWidth && (
          <div className="absolute right-[-15px] top-[20px]">
            <Button onClick={toggleSidebar} variant='secondary' className="rounded-5 h-[24px] md:p-2 px-[5px]" >
              <Menu size={15}/>
            </Button>
          </div>

        )}

            {/* <div className="p-2">
              {isCollapsed ? (
                <Image src="/images/logoMini.png" alt="Logo" width={30} height={100} className=" md:p-1  pl-2"/> 
              ) : (
                <Image src="/images/logoBlack.png" alt="Logo" width={130} height={100} className="px-3"/>
              ) }
            </div> */}

          {!mobileWidth && (
            <div className="p-2">
              {isCollapsed ? (
              <Image src="/images/miniBlue.svg" alt="Logo" width={30} height={100} className=" md:p-1  pl-2"/>          
              ) : (
                <Image src="/images/logoBlue.svg" alt="Logo" width={130} height={100} className="px-3"/>         
              ) }
            </div>
          )}

          {mobileWidth && (
            <div className="p-2">
            <Image src="/images/miniBlue.svg" alt="Logo" width={40} height={100} className=" md:p-1  px-1"/>          
          </div>
          )}  
        

      

        <Nav
              isCollapsed={mobileWidth ? true : isCollapsed}
              links={[
                {
                  title: "Dashboard",
                  href: "/",
                  icon: LayoutDashboard,
                  variant: "default",
                },
                {
                  title: "Transactions",
                  href: "/transactions",
                  icon: Activity,
                  variant: "ghost",
                },
                {
                  title: "Trades",
                  href: "/trades",
                  icon: Waypoints,
                  variant: "ghost",
                },
                {
                  title: "Users",
                  href: "/users",
                  icon: User,
                  variant: "ghost",
                },
                {
                  title: "Authentication",
                  href: "/authentication",
                  icon: ShieldCheck,
                  variant: "ghost",
                },
                {
                  title: "Settings",
                  href: "/settings",
                  icon: Settings,
                  variant: "ghost",
                },
                {
                  title: "Log Out",
                  href: "/logout",
                  icon: LogOut,
                  variant: "ghost",
                },
              ]}
            />

         

    </div>
  )
}