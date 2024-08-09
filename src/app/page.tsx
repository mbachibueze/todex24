import Card, { CardProps } from "@/components/ui/card";
import PageTitle from "@/components/ui/pageTitle";
import { Activity, User, ChartNoAxesCombined, HandCoins } from "lucide-react";
import Image from "next/image";

const cardData: CardProps[] = [
  {
    label: "Stat Tabs",
    icon: Activity,
    amount: "350",
    description: "Statistics",
  },
  {
    label: "Total Transactions",
    icon: HandCoins,
    amount: "$73,823",
    description: "Last 24 Hours",
  },
  {
    label: "Revenue Today",
    icon: ChartNoAxesCombined,
    amount: "$312,213.23",
    description: "Last 24 Hours",
  },
  {
    label: "New Users",
    icon: User,
    amount: "+306",
    description: "Last 7 days",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all duration-200 sm:grid-cols-2 md:grid-cols-4">
        {cardData.map((d,i)=> (
          <Card key={i}
            label={d.label}
            icon={d.icon}
            amount={d.amount}
            description={d.description}
          />
        ))}
      </section>
    </div>
  );
}
