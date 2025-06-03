import Brose from "@/app/assets/brose.png";
import Haul from "@/app/assets/haul.png";
import Nakda from "@/app/assets/nakda.png";
import { AnimatedShinyText } from "@/app/components/magicui/animated-shiny-text";
import { cn } from "@/app/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const items = [
  {
    title: "Brose group",
    description: "Diseñador frontend y backend.",
    date: "2024 - Presente",
    image: Brose,
  },
  {
    title: "Haul",
    description: "Programador fullstack.",
    date: "2023 - 2024",
    image: Haul,
  },
  {
    title: "Nakda",
    description: "Desarrollo frontend con PHP y Javascript.",
    date: "2022 - 2023",
    image: Nakda,
  },
];

export default function ExperienceCard() {

  const router = useRouter()
  return (
    <div className="flex flex-col gap-5 group/bento transition duration-200">
      <div className="w-[165px] h-[32px] transition duration-200 group-hover/bento:translate-x-2" >
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-[#26262651] dark:hover:bg-[#26262672] dark:backdrop-opacity-90"
          )}
        >
          <AnimatedShinyText 
            className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" 
            onClick={() => router.push('/about')}
          >
            <span> 💼 Experiencie</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex gap-5 p-2 group/bento transition duration-200">
        <ul className="w-full flex flex-col gap-2 transition duration-200 group-hover/bento:translate-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex gap-4 items-center">
              <Image
                src={item.image}
                className="rounded-sm object-contain h-[32px] p-1 bg-white border-1 border-gray-300 dark:border-none"
                alt="experience"
                width={32}
                height={32}
              />
              <div className="flex justify-between w-full">
                <div className="text-neutral-800 dark:text-white flex items-center gap-2">
                  {item.title}
                  <span className="text-gray-400 font-normal text-[13px]">
                    {item.description}
                  </span>
                </div>
                <div className="text-gray-400 text-[13px] leading-[32px] ml-auto ">
                  {item.date}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
