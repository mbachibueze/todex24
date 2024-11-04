'use client';

import React, { useState, useEffect } from 'react';
import { DataTable } from '@/components/dataTable';
import PageTitle from '@/components/ui/pageTitle';
import { ColumnDef } from '@tanstack/react-table';
import { HiViewGridAdd } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import withAuth from '@/app/detail/path/to/withAuth';

type Props = {};

type Payment = {
  name: string;
  email: string;
  id: string;
  wallet: number;
  trades: number;
  status: "pending" | "processing" | "success" | "failed";
  action: string;
};

function UsersPage({}: Props): JSX.Element {
  const [data, setData] = useState<Payment[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users'); // URL to be replaced with actual API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className='flex gap-2 items-center'>
          <img className='h-10 w-10'
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`}
            alt='user-image'
          />
          <p className='hidden md:block'>{row.getValue("name")}</p>
        </div>
      )
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="text-ellipsis">
          <p className="truncate w-20 md:w-full">{row.getValue("email")}</p>
        </div>
      )
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
      cell: ({ row }) => (
        <div className='flex items-center w-full'>
          <div>$</div>
          <p>{row.getValue("wallet")}</p>
        </div>
      )
    },
    {
      accessorKey: "action",
      header: "",
      cell: ({ row }) => (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='flex items-center gap-[5px] justify-between border border-[#5385ea] w-fit p-[4px] sm:py-[2px] sm:px-[6px] pl-[8px] rounded-[5px] transition-all duration-300 hover:text-white hover:bg-[#5385ea] cursor-pointer text-[13px] md:text-[11px] text-[#5385ea]'>
                <HiViewGridAdd size={18} />
                <div className='hidden md:block'>View More</div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  ];

  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// Wrap the UsersPage component with the withAuth HOC for route protection
export default withAuth(UsersPage);
