'use client';

import { useEffect, useState } from 'react';
import { RevenueInflow } from '@/components/revenueInflow';
import PageTitle from '@/components/ui/pageTitle';
import { ColumnDef } from '@tanstack/react-table';
import { HiViewGridAdd } from 'react-icons/hi';
import React from 'react';
import { MoreHorizontal, Check, CheckCheck, X, Loader, CircleHelp } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { TradeDataTable } from '@/components/tradeDataTable';
import withAuth from '@/app/detail/path/to/withAuth'

const handleViewTrades = (id: string) => {
  alert(`Viewing trades for id: ${id}`);
};

const handleViewCustomer = (id: string) => {
  alert(`Viewing customer for id: ${id}`);
};

const handleViewPaymentDetails = (id: string) => {
  alert(`Viewing payment details for id: ${id}`);
};

type Props = {};

type Payment = {
  name: string;
  email: string;
  id: string;
  amount: number;
  trades: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  action: string;
  time: string;
};

 function TradesPage({}: Props) {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/trades');
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
    { accessorKey: 'id', header: 'User Id' },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }) => (
        <div className='flex items-center w-full'>
          <div>$</div>
          <p>{row.getValue('amount')}</p>
        </div>
      )
    },
    { accessorKey: 'time', header: 'Date' },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <div>{row.getValue('status')}</div>
    },
    {
      accessorKey: 'status',
      header: '',
      cell: ({ row }) => {
        const status = row.getValue('status');
        let icon;

        switch (status) {
          case 'pending':
            icon = <Check color='orange' size={14} />;
            break;
          case 'processing':
            icon = <Loader color='gray' size={14} />;
            break;
          case 'success':
            icon = <CheckCheck color='green' size={14} />;
            break;
          case 'failed':
            icon = <X color='red' size={14} />;
            break;
          default:
            icon = <CircleHelp color='gray' />;
        }

        return <div>{icon}</div>;
      }
    },
    {
      accessorKey: 'action',
      header: '',
      cell: ({ row }) => {
        const userId = row.getValue('id');
        const userName = data.find((item) => item.id === userId)?.name;

        return (
          <div className=''>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='flex items-center gap-[5px] justify-between border border-[#5385ea] w-fit p-[4px] sm:py-[2px] sm:px-[6px] pl-[8px] border-[2px]-[#5385ea] rounded-[5px] transition-all duration-300 hover:text-white hover:bg-[#5385ea] cursor-pointer text-[13px] md:text-[11px] text-[#5385ea]'>
                  <HiViewGridAdd size={18} />
                  <div className='hidden md:block'>View More</div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleViewTrades(row.getValue('id'))}>
                  View Trades
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleViewCustomer(row.getValue('id'))}>
                  View Customer
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleViewPaymentDetails(row.getValue('id'))}>
                  View Payment Details
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p>{row.getValue('action')}</p>
          </div>
        );
      }
    }
  ];

  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Trades' />
      <TradeDataTable columns={columns} data={data} />
    </div>
  );
}


export default withAuth(TradesPage)