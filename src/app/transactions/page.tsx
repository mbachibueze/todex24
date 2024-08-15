'use client'



import { DataTable } from '@/components/dataTable'
import PageTitle from '@/components/ui/pageTitle'
import { ColumnDef } from '@tanstack/react-table'
import { ChartNoAxesGantt } from 'lucide-react'
import { HiViewGridAdd } from "react-icons/hi";
import React from 'react'

import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

type Props = {}

type Payment = {
  name: string
  email: string
  id: string
  wallet: number
  trades: number
  status: "pending" | "processing" | "success" | "failed"
  action: string
}

export default function TransactionsPage({}: Props){

  const columns: ColumnDef<Payment>[] = [
    { 
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return(
          <div className='flex sm:flex-row flex-col gap-2 items-center'>
              <img className='h-10 w-10'
              src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`}
              alt='user-image'
              />
              <p>{row.getValue("name")}</p>
          </div>
        );
      }
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) =>{
        return(
          <div className='text-ellipsis'>
            <div> 
            </div>
            <p>{row.getValue("email")}</p>
          </div>
        )
      }
    },
    {
      accessorKey: "id",
      header: "User Id",
    },
    {
      accessorKey: "trades",
      header: "Total Trades",
    },
    {
      accessorKey: "wallet",
      header: "Wallet Balance",
      cell: ({ row }) =>{
        return(
          <div className='flex items-center w-full'>
            <div> 
              $
            </div>
            <p>{row.getValue("wallet")}</p>
          </div>
        )
      }
    },
    {
      accessorKey: "action",
      header: "",
      cell: ({ row }) => {
        return(
          <div className=''>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <div className='flex items-center gap-[5px] justify-between border border-[#5385ea] w-fit p-[4px] sm:py-[2px] sm:px-[6px] pl-[8px] border-[2px]-[#5385ea] rounded-[5px] transition-all duration-300 hover:text-white hover:bg-[#5385ea] cursor-pointer text-[13px] md:text-[11px] text-[#5385ea]'>
                    <HiViewGridAdd size={18}/>
                    <div className='hidden md:block'>View More</div>
                  </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      Copy payment ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View payment details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              <p>{row.getValue("action")}</p>
          </div>
        );
      }
    },
  ]

  const data: Payment[] = [
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "temitopeoyedele@gmail.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "489e1d42",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "example@gmail.com",
      action: ""
    },
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "mbachibueze27@gmail.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "93234",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "temitope@gmail.com",
      action: ""
    },
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "m@example.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "489e1d42",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "example@gmail.com",
      action: ""
    },
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "m@example.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "489e1d42",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "example@gmail.com",
      action: ""
    },
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "m@example.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "489e1d42",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "example@gmail.com",
      action: ""
    },
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "m@example.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "489e1d42",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "example@gmail.com",
      action: ""
    },
    {
      name: "Temitope Oyedele",
      id: "728ed52f",
      wallet: 100,
      trades: 23,
      status: "pending",
      email: "m@example.com",
      action: ""
    },
    {
      name: "Erapi Akinsoye",
      id: "489e1d42",
      wallet: 125,
      trades: 12,
      status: "processing",
      email: "example@gmail.com",
      action: ""
    },
    // ...
  ]

  return(
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Transactions"/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}





 
 

/* <div className='flex items-center gap-[5px] justify-between border border-[#5385ea] w-fit p-[4px] sm:py-[2px] sm:px-[6px] pl-[8px] border-[2px]-[#5385ea] rounded-[5px] transition-all duration-300 hover:text-white hover:bg-[#5385ea] cursor-pointer text-[13px] md:text-[11px] text-[#5385ea]'>
<HiViewGridAdd
  size={18}
/>
<div className='hidden md:block'>View More</div>

</div> */


 
