"use client";
import MacbookImage from "@/app/assets/macbook.jpg";
import BentoWork from "@/app/components/BentoWork";
import { ClientTweetCard } from "@/app/components/client-tweet-card";
import ContactCard from "@/app/components/ContactCard";
import ExperienceCard from "@/app/components/ExperienceCard";
import ExpertiseAreas from "@/app/components/ExpertiseAreas";
import Footer from "@/app/components/Footer";
import IntroductionCard from "@/app/components/IntroductionCard";
import { AnimatedShinyText } from "@/app/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/app/components/magicui/text-animate";
import { AnimatedTestimonialsDemo } from "@/app/components/ProjectsCard";
import { Text } from "@radix-ui/themes";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import Figma from "./components/icons/figma";
import Firebase from "./components/icons/firebase";
import Git from "./components/icons/git";
import JavaScript from "./components/icons/javascript";
import MongoDB from "./components/icons/mongo";
import Mysql from "./components/icons/mysql";
import Nextjs from "./components/icons/nextjs";
import Nodejs from "./components/icons/node";
import React from "./components/icons/react";
import Tailwind from "./components/icons/tailwind";
import TypeScript from "./components/icons/typescript";
import AnimatedContent from "./components/ui/animated-content";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import FadeContent from "./components/ui/fade-content";

export default function HomePage() {
  const items = [
    {
      id: "intro",
      className: "md:col-span-3",
      customContent: <IntroductionCard />,
    },
    {
      id: "experience",
      className: "md:col-span-3",
      customContent: <ExperienceCard />,
    },
    {
      id: "design",
      className: "md:col-span-2 p-0 ",
      hasChild: true,
      customContent: <BentoWork />,
    },
    {
      id: "communication",
      className: "md:col-span-2",
      customContent: <AnimatedTestimonialsDemo />,
    },
    {
      id: "contact  ",
      className: "md:col-span-2",
      customContent: <ClientTweetCard id="1927874552559771712" />,
    },
  ];

  const techs = [
    {
      id: "html",
      icon: <JavaScript className="h-4 w-4 text-neutral-500" />,
      title: "HTML",
    },
    {
      id: "css",
      icon: <React className="h-4 w-4 text-neutral-500" />,
      title: "CSS",
    },
    {
      id: "javascript",
      icon: <JavaScript className="h-4 w-4 text-neutral-500" />,
      title: "JavaScript",
    },
    {
      id: "react",
      icon: <React className="h-4 w-4 text-neutral-500" />,
      title: "React",
    },
    {
      id: "tailwind",
      icon: <Tailwind className="h-4 w-4 text-neutral-500" />,
      title: "Tailwind",
    },
    {
      id: "typescript",
      icon: <TypeScript className="h-4 w-4 text-neutral-500" />,
      title: "TypeScript",
    },
    {
      id: "nextjs",
      icon: <Nextjs className="h-4 w-4 text-neutral-500" />,
      title: "Next.js",
    },
    {
      id: "nodejs",
      icon: <Nodejs className="h-4 w-4 text-neutral-500" />,
      title: "Node.js",
    },
    {
      id: "mongodb",
      icon: <MongoDB className="h-4 w-4 text-neutral-500" />,
      title: "MongoDB",
    },
    {
      id: "mysql",
      icon: <Mysql className="h-4 w-4 text-neutral-500" />,
      title: "MySQL",
    },
    {
      id: "firebase",
      icon: <Firebase className="h-4 w-4 text-neutral-500" />,
      title: "Firebase",
    },
    {
      id: "git",
      icon: <Git className="h-4 w-4 text-neutral-500" />,
      title: "Git",
    },
    {
      id: "figma",
      icon: <Figma className="h-4 w-4 text-neutral-500" />,
      title: "Figma",
    },
  ];

  return (
    <div className="dark:bg-zinc-950 bg-neutral-50 ">
      <div className="font-sans min-h-screen max-h-full w-full">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="h-auto flex md:px-[4.5rem] lg:px-16 xl:px-48 pt-[70px] md:pt-[135px] flex-col gap-4 break-words leading-normal tracking-tighter">
            <Text
              weight={"bold"}
              size={"8"}
              className="text-zinc-960 dark:text-zinc-100"
            >
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                className=" text-neutral-900 dark:text-neutral-200 px-5 md:px-0"
              >
                miralriodev
              </TextAnimate>
            </Text>
            <Text
              weight={"regular"}
              size={"4"}
              className="text-zinc-700 dark:text-zinc-300 w-full max-w-2xl mt-14 px-5 md:px-0 leading-relaxed"
            >
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                className="text-neutral-900 dark:text-neutral-400 break-words leading-normal tracking-tighter"
              >
                Soy frontend y diseñador web con sede en Querétaro, México. Actualmente estudio la universidad y estoy abierto a proyectos.
              </TextAnimate>
            </Text>
          </div>
        </FadeContent>
        <AnimatedContent>
          <BentoGrid className="px-4 sm:px-8 md:px-16 lg:mt-20 mt-16 relative z-0">
            {items.map((item) => (
              <BentoGridItem
                key={item.id}
                className={item.className}
                customContent={item.customContent}
                hasChild={item.hasChild}
              />
            ))}
          </BentoGrid>
        </AnimatedContent>
      </div>
      
      {/* Techs carousel*/}
      <div className="overflow-hidden py-10">
        <div className="overflow-hidden mask-fade flex flex-col">
          <div className="flex animate-scroll whitespace-nowrap hover:animate-marquee-pause">
            {techs.map((tech, index) => (
              <span
                key={index}
                className="mx-4 text-md font-bold text-zinc-700 dark:text-zinc-300 flex gap-2 items-center px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
              >
                {tech.icon}
                {tech.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Speciality */}
      <div className="flex px-4 sm:px-8 md:px-16 lg:px-48 gap-4 w-fit items-center">
          <Sparkle className="text-[#b5ff6d] text-2xl" />
        <AnimatedShinyText className="text-[#b5ff6d]" golden={true}>
          Speciality
        </AnimatedShinyText>
      </div>

      {/* Expertise Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-48 py-4 gap-8 md:gap-20">
        <ExpertiseAreas />
        <Image
          src={MacbookImage}
          alt="areas"
          width={600}
          height={600}
          className="hidden md:block md:w-auto md:h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Contact */}
      <ContactCard />
      
      {/* Footer */}
      <Footer />
      </div>
  );
}
