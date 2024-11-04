import { cn } from '@/lib/utils';
import React from 'react'
import Image from "next/image";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



type Props = {
  title: string;
  className?: string;
}

import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

import {Search, Bell } from "lucide-react"

export default function PageTitle({title, className}: Props){
  return(
    <div className='flex items-center justify-between'>
      <h1 className={cn('text-2xl sm:text-[20px] font-semibold', className)}>
        {title}
      </h1>

      {/* Nav */}
      <div className='flex gap-[20px] items-center'>

        {/* Search Bar */}
        <div className='font-semibold text-[#efefef]'>
          <div  className="sm:flex items-center bg-white rounded-[100px] px-1 border border-[#4277DF] hidden sm:block">
            <Search color='#1b2450' size={17} className=''/>
            <input className="rounded-[50px] outline-none text-black px-2 py-[2px] text-sm  w-0 hover:w-[150px] focus:w-[150px] font-normal transition-width duration-500"
                    />
          </div>
        </div>

        {/* Notification Icon */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="cursor-pointer text-[#4277DF] hover:text-[#0641B6] transition-colors duration-200">
              <IoNotifications 
                size={24}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


        {/* <div className="cursor-pointer text-[#4277DF] hover:text-[#0641B6] transition-colors duration-200">
            <IoNotifications 
              size={24}
            />
        </div> */}

         {/* Use Profile */}
        <div className="flex gap-[10px] items-center bg-white text-black  p-1 nd:pr-2 rounded-[50px] cursor-pointer border border-[#4277DF]" >
          <Image src="/images/profileIcon.svg" alt="Logo" width={20} height={20}/>
          {/* username */}
          <div className="font-semibold text-[13px] md:block hidden">Temitope Oyedele</div>
          <div className="md:block hidden"><FaAngleRight /></div>
                    
        </div>

       

      </div>
    </div>
  )
}