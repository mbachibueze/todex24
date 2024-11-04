'use client';

import { useEffect, useState } from 'react';
import { DataTable } from '@/components/dataTable';
import PageTitle from '@/components/ui/pageTitle';
import { ColumnDef } from '@tanstack/react-table';
import { HiViewGridAdd } from 'react-icons/hi';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import withAuth from '@/app/detail/path/to/withAuth'

type Props = {};

type Payment = {
  name: string;
  email: string;
  id: string;
  wallet: number;
  trades: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  action: string;
};

 function TransactionsPage({}: Props) {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/transactions');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        console.error(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => (
        <div className='flex gap-2 items-center'>
          <img
            className='h-10 w-10'
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue('name')}`}
            alt='user-image'
          />
          <p>{row.getValue('name')}</p>
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <div className='text-ellipsis'>
          <p>{row.getValue('email')}</p>
        </div>
      ),
    },
    { accessorKey: 'id', header: 'User Id' },
    { accessorKey: 'trades', header: 'Total Trades' },
    {
      accessorKey: 'wallet',
      header: 'Wallet Balance',
      cell: ({ row }) => (
        <div className='flex items-center w-full'>
          <div>$</div>
          <p>{row.getValue('wallet')}</p>
        </div>
      ),
    },
    {
      accessorKey: 'action',
      header: '',
      cell: ({ row }) => (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='flex items-center gap-[5px] justify-between border border-[#5385ea] w-fit p-[4px] sm:py-[2px] sm:px-[6px] pl-[8px] border-[2px]-[#5385ea] rounded-[5px] transition-all duration-300 hover:text-white hover:bg-[#5385ea] cursor-pointer text-[13px] md:text-[11px] text-[#5385ea]'>
                <HiViewGridAdd size={18} />
                <div className='hidden md:block'>View More</div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Transactions' />
      <DataTable columns={columns} data={data} />
      {/* {loading && <p>Loading transactions...</p>} */}
    </div>
  );
}


export default withAuth(TransactionsPage)