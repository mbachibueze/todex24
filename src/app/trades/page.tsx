'use client'



import { DataTable } from '@/components/dataTable'
import PageTitle from '@/components/ui/pageTitle'
import { ColumnDef } from '@tanstack/react-table'
import { ChartNoAxesGantt } from 'lucide-react'
import { HiViewGridAdd } from "react-icons/hi";
import React from 'react'

import { MoreHorizontal,  Check, CheckCheck, X, Loader, CircleHelp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TradeDataTable } from '@/components/tradeDataTable'




const handleViewTrades = (id: string) => {
  // Fetch trades data for the given id and display it in a modal or separate page
  alert(`Viewing trades for id: ${id}`);
};

const handleViewCustomer = (id: string) => {
  // Fetch customer data for the given id and display it in a modal or separate page
  alert(`Viewing customer for id: ${id}`);
};

const handleViewPaymentDetails = (id: string) => {
  // Fetch payment details data for the given id and display it in a modal or separate page
  alert(`Viewing payment details for id: ${id}`);
};


type Props = {}

type Payment = {
  name: string
  email: string
  id: string
  amount: number
  trades: number
  status: "pending" | "processing" | "success" | "failed"
  action: string
  time: string
}

export default function TradesPage({}: Props){

   
 const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "id",
    header: "User Id",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) =>{
      return(
        <div className='flex items-center w-full'>
          <div> 
            $
          </div>
          <p>{row.getValue("amount")}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row}) => {
      return <div>
        {row.getValue("status")}
      </div>
    }
  },
  {
    accessorKey: "status",
    header: "",
    cell: ({ row }) => {
      const status = row.getValue("status");
      let icon;

      switch (status) {
        case "pending":
          icon = <Check color="orange" size={14} />;
          break;
        case "processing":
          icon = <Loader color="gray" size={14} />;
          break;
        case "success":
          icon = <CheckCheck color="green" size={14} />;
          break;
        case "failed":
          icon = <X color="red" size={14} />;
          break;
        default:
          icon = <CircleHelp color="gray"  />;
      }

      return <div>{icon}</div>;
    }
  },
  {
    accessorKey: "time",
    header: "Date",
  },
  {
    accessorKey: "action",
    header: "",
    cell: ({ row }) => {
      const userId = row.getValue("id");
      const userName = data.find((item) => item.id === userId)?.name;
  
      return (
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-[5px] justify-between border border-[#5385ea] w-fit p-[4px] sm:py-[2px] sm:px-[6px] pl-[8px] border-[2px]-[#5385ea] rounded-[5px] transition-all duration-300 hover:text-white hover:bg-[#5385ea] cursor-pointer text-[13px] md:text-[11px] text-[#5385ea]">
                <HiViewGridAdd size={18} />
                <div className="hidden md:block">View More</div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{userName}</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleViewTrades(row.getValue("id"))}>
              View Trades
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleViewCustomer(row.getValue("id"))}>
              View Customer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleViewPaymentDetails(row.getValue("id"))}>
              View Payment Details
            </DropdownMenuItem>
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
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "pending",
    email: "temitopeoyedele@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "failed",
    email: "example@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "success",
    email: "mbachibueze27@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "processing",
    email: "temitope@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "pending",
    email: "m@example.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "processing",
    email: "example@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "pending",
    email: "m@example.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "processing",
    email: "example@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "pending",
    email: "m@example.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "processing",
    email: "example@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "pending",
    email: "m@example.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "processing",
    email: "example@gmail.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 100,
    trades: 23,
    status: "pending",
    email: "m@example.com",
    action: ""
  },
  {
    name: generateRandomNigerianName(),
    id: generateRandomId(),
    time: generateRandomDate(),
    amount: 125,
    trades: 12,
    status: "processing",
    email: "example@gmail.com",
    action: ""
  },
  // ...
]

  return(
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Trades"/>
      <TradeDataTable columns={columns} data={data} />
    </div>
  )
}

function generateRandomNigerianName() {
  const firstNames = [
    "Temitope",
    "Erapi",
    "Bamidele",
    "Akinsoye",
    "Oyedele",
    "Adeotun",
    "Olufunmilayo",
    "Abosede",
    "Oluwaseun",
    "Adebayo"
  ];

  const lastNames = [
    "Oyedele",
    "Akinsoye",
    "Adeotun",
    "Bamidele",
    "Erapi",
    "Temitope",
    "Olufunmilayo",
    "Abosede",
    "Oluwaseun",
    "Adebayo"
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
}









function generateRandomId() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let id = "";

  for (let i = 0; i < 8; i++) {
    if (Math.random() < 0.625) { // 5/8 chance of generating an alphabet
      id += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    } else {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }

  return id;
}

function generateRandomDate() {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2025-12-31");
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}