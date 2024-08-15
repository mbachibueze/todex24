
import Card, { CardContent, CardProps } from "@/components/ui/cardComponent";

import { FcGoogle } from "react-icons/fc";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-4 h-screen w-screen flex overflow-hidden bg-gray-200">
      <section className="grid place-items-center w-full h-full">
        <div className="flex flex-col gap-[40px] w-[300px] shadow p-4 rounded-[10px] items-center bg-white ">
          <div><Image src="/images/logoBlue.svg" alt="Logo" width={130} height={100} className="px-3"/> </div>

          {/* Input */}
          <div className="w-[250px] flex flex-col gap-6">
            <input className="rounded-[5px] outline-none text-black p-4 text-sm bg-gray-300 w-full h-[30px] transition-width duration-500 font-normal "
              placeholder="Username"
                  />
            <input className="rounded-[5px] outline-none text-black p-4 text-sm bg-gray-300 w-full h-[30px] transition-width duration-500 font-normal "
              placeholder="Password"
            />
          </div>

          {/* Button */}
          <div className="w-full gap-1 flex flex-col items-center justify-center" >

              <Link href="/detail/dashboard" className="w-full">
                <div className="bg-[#0641B6] text-white p-1 rounded-[50px] w-full text-center cursor-pointer font-semibold">
                  Log In
                </div>
              </Link>

              <div className="font-semibold">or</div>

              <div className="bg-white border border-blue-700 text-black p-1 rounded-[50px] w-full text-center cursor-pointer font-normal flex items-center justify-center text-[14px] gap-3">
                <FcGoogle/>
                Continue with Google
              </div>

              <div className="text-black text-[12px]" >Forgot Password?</div>
              
            </div>

        </div>
      </section>
    </div>
  );
}
