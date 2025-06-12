import React from "react";
import { Smile, Flag, CalendarSearch } from "lucide-react";
import Link from "next/link";

function BentoWork() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-2">
      <div className="flex flex-col gap-2 items-center justify-center bg-neutral-100 rounded-xl px-4 md:py-0 py-4 border border-neutral-300 transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a]">
        <p className="text-4xl font-bold dark:text-neutral-200 flex items-center gap-1">
          56<span className="text-indigo-400 font-light text-4xl">+</span>
        </p>
        <div className="py-1 px-4 bg-neutral-200 rounded-xl dark:text-neutral-200 dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] border border-neutral-200 dark:border-white/[0.2] flex items-center gap-2">
          <Flag className="h-4 w-4" />
          <span>Projects</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center bg-neutral-100 rounded-xl px-4 border transition duration-200 border-neutral-300  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a]">
        <p className="text-4xl font-bold dark:text-neutral-200 flex items-center gap-1">
          10<span className="text-indigo-400 font-light text-4xl">+</span>
        </p>
        <div className="py-1 px-4 bg-neutral-200 rounded-xl dark:text-neutral-200 dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] border dark:border-white/[0.2] flex items-center gap-2 text-nowrap">
          <Smile className="h-4 w-4" />
          <span>Happy Clients</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-neutral-100 rounded-xl col-span-2 px-4 border border-neutral-300  transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] md:py-0 py-4">
        <Link href="/work" className="text-neutral-600 dark:text-neutral-200 flex items-center gap-2"> <CalendarSearch className="h-6 w-6 text-neutral-600 dark:text-neutral-200 font-extrabold" />Schedule a call</Link>
      </div>
    </div>
  );
}

export default BentoWork;
