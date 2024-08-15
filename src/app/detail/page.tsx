
import Card, { CardContent, CardProps } from "@/components/ui/cardComponent";

import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
     <CardContent>
        <div><Image src="/images/logoBlue.svg" alt="Logo" width={130} height={100} className="px-3"/> </div>
        <div></div>
     </CardContent>
    </div>
  );
}
