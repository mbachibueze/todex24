'use client'

import { useEffect, useState } from "react";
import { CustomerInflow } from "@/components/customerInflow";
import { RevenueInflow } from "@/components/revenueInflow";
import { RevenueSource } from "@/components/revenueSource";
import Card, { CardContent, CardProps } from "@/components/ui/cardComponent";
import PageTitle from "@/components/ui/pageTitle";
import { Activity, User, ChartNoAxesCombined, HandCoins } from "lucide-react";
import withAuth from '@/app/detail/path/to/withAuth'

function Home() {
  const [cardData, setCardData] = useState<CardProps[]>([
    {
      label: "Stat Tabs",
      icon: Activity,
      amount: "0",
      description: "Statistics",
    },
    {
      label: "Total Transactions",
      icon: HandCoins,
      amount: "$0",
      description: "Last 24 Hours",
    },
    {
      label: "Revenue Today",
      icon: ChartNoAxesCombined,
      amount: "$0",
      description: "Last 24 Hours",
    },
    {
      label: "New Users",
      icon: User,
      amount: "+0",
      description: "Last 7 days",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard-data");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();

        // Format the fetched data
        const formattedData = [
          {
            label: "Stat Tabs",
            icon: Activity,
            amount: result.statTabs ? result.statTabs.toString() : "0",
            description: "Statistics",
          },
          {
            label: "Total Transactions",
            icon: HandCoins,
            amount: result.totalTransactions
              ? `$${result.totalTransactions.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
              : "$0",
            description: "Last 24 Hours",
          },
          {
            label: "Revenue Today",
            icon: ChartNoAxesCombined,
            amount: result.revenueToday
              ? `$${result.revenueToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
              : "$0",
            description: "Last 24 Hours",
          },
          {
            label: "New Users",
            icon: User,
            amount: result.newUsers ? `+${result.newUsers}` : "+0",
            description: "Last 7 days",
          },
        ];

        setCardData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 lg:gap-3 gap-x-8 transition-all duration-600 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            label={d.label}
            icon={d.icon}
            amount={d.amount}
            description={d.description}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-3 transition-all">
        {/* <CustomerInflow /> */}
        {/* <RevenueInflow /> */}
        {/* <RevenueSource /> */}
      </section>
    </div>
  );
}


export default withAuth(Home)
