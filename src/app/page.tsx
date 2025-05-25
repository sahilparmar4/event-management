"use client"
import { appleevent } from "@/components/image";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router  = useRouter()

  return (
    <>
      <div className={`relative bg-center bg-cover w-full min-h-screen`} style={{backgroundImage: `url(${appleevent.src})`}}>

      <div className="flex justify-center items-center px-8 py-8 md:py-4 md:px-4 md:p-40 flex-col absolute z-[1] bg-white/[10%] ml-10 mr-10 my-30 md:ml-20 md:mr-80 md:my-40 rounded-lg">
          <h1 className="font-bold md:text-3xl text-left text-white">
           Welcome to our Event Management App. click the button below and to our events page. 
          </h1>
          <h1 className="font-bold md:text-3xl text-left text-white">
              Check it out and book your seats.
          </h1>
          <div className="mt-6">
            <button onClick={()=>router.push("/events")} className="cursor-pointer bg-gray-300 text-black border rounded-lg p-2 md:p-4">
              Go to Events
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}
