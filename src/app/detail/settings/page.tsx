'use client';

import React from 'react';
import PageTitle from '@/components/ui/pageTitle';
import { SettingsTable } from '@/components/settingsTable';
import { ColumnDef } from '@tanstack/react-table';
import { Switch } from "@/components/ui/switch";
import withAuth from '@/app/detail/path/to/withAuth'

type Props = {};

type Payment = {
  category: string;
  value: boolean;
};

const SettingsPage = ({ }: Props) => {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "value",
      header: "Switch",
      cell: ({ getValue, row }) => (
        <Switch
          
          onChange={(checked) => console.log(`Row ${row.index} switch changed to ${checked}`)}
        />
      ),
    },
  ];

  const data: Payment[] = [
    {
      category: "Switch to App",
      value: true,
    },
    {
      category: "Accept Trades",
      value: true,
    },
    // ...
  ];

  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Settings" />
      <SettingsTable columns={columns} data={data} />
    </div>
  );
};

export default withAuth(SettingsPage);