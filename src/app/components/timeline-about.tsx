import BroseAbout from "@/app/assets/brose-about.jpg";
import Brose from "@/app/assets/brose.png";
import FriendsUteq from "@/app/assets/frienduteq.jpg";
import Haul from "@/app/assets/haul.png";
import HaulMockup from "@/app/assets/haulmockup.png";
import NakdaEcommerce from "@/app/assets/nakda-ecommerce.png";
import Nakda from "@/app/assets/nakda.png";
import { Timeline } from "@/app/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "Work Experience",
      content: (
        <div className="flex flex-col gap-10 mb-10">
          <div>
            <div className="flex justify-between align-middle">
              <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-semibold">
                Brose
              </p>
              <p className="text-gray-500">2024 - Present</p>
            </div>
            <p className="text-gray-500 mb-8">Developer Trainee</p>
            <div className="flex flex-col gap-0.5 mb-5">
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Redesigned the company website using C# and ASP .NET with
                webforms.
              </p>
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Administrated databases of the applications and the company
                website.
              </p>
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Redesigned the company website using C# and ASP .NET with
                webforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src={BroseAbout}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Brose}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-contain p-10 bg-white h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between align-middle">
              <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-semibold">
                Haul
              </p>
              <p className="text-gray-500">2022 - 2023</p>
            </div>
            <p className="text-gray-500 mb-8">Developer Trainee</p>
            <div className="flex flex-col gap-0.5 mb-5">
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Redesigned the company website using C# and ASP .NET with
                webforms.
              </p>
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Administrated databases of the applications and the company
                website.
              </p>
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Redesigned the company website using C# and ASP .NET with
                webforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src={HaulMockup}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-contain bg=white h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Haul}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-contain p-10 bg-white h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between align-middle">
              <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-semibold">
                Nakda
              </p>
              <p className="text-gray-500">2023 - 2024</p>
            </div>
            <p className="text-gray-500 mb-8">Developer Trainee</p>
            <div className="flex flex-col gap-0.5 mb-5">
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Redesigned the company website using C# and ASP .NET with
                webforms.
              </p>
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Administrated databases of the applications and the company
                website.
              </p>
              <p className="text-neutral-800 dark:text-neutral-50 flex items-center">
                <svg width="6" height="6" viewBox="0 0 6 6" className="mr-5">
                  <circle cx="3" cy="3" r="2" fill="#22c55e" />
                </svg>
                Redesigned the company website using C# and ASP .NET with
                webforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src={NakdaEcommerce}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Nakda}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-contain p-10 bg-white h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Studies",
      content: (
        <div className="md:mt-20 mt-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold mb-8">
            Universidad Tecnologica de Queretaro.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={FriendsUteq}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  
  ];
  return (
    <div className="w-full bg-transparent ">
      <Timeline data={data} />
    </div>
  );
}
