"use client";
import ProfilePicture from "@/app/assets/miralhu-avatar.png";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent dark:bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl max-h-full mx-auto py-20 px-4 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={ProfilePicture}
            className="rounded-full"
            alt="miralhu-avatar"
            width={200}
            height={200}
          />
          <p className="text-neutral-700 flex gap-1.5 dark:text-neutral-50 text-sm md:text-base max-w-sm">
            <IconMapPin className="text-indigo-500 dark:text-orange-700" />{" "}
            Querétaro/México
          </p>
          <div className="flex gap-2">
            <p className="rounded-2xl text-neutral-950 dark:text-neutral-50 text-sm bg-neutral-200 dark:bg-neutral-800 p-1 w-[80px] border-1 border-gray-600 text-center">
              English
            </p>
            <p className="rounded-2xl text-neutral-950 dark:text-neutral-50 text-sm bg-neutral-200 dark:bg-neutral-800 p-1 w-[80px] border-1 border-gray-600 text-center">
              Spanish
            </p>
          </div>
        </div>
        <div className="col-span-2 md:py-10 py-5 flex flex-col gap-2 px-8 md:px-0">
          <h2 className="text-neutral-800 dark:text-neutral-50 lg:text-7xl md:text-5xl text-4xl text-center md:text-left  font-semibold">
            Hugo Miralrio
          </h2>
          <p className="text-neutral-400 lg:text-3xl text-2xl text-center md:text-left">
            Frontend Developer
          </p>

          <div className="flex gap-2 mt-5">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 font-medium text-center w-[90px] p-1 rounded-lg dark:text-neutral-200 text-sm dark:bg-neutral-900 border-1 border-gray-500"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-white" />
              Github
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 font-medium text-center w-[90px] p-1 rounded-lg dark:text-neutral-200 text-sm dark:bg-neutral-900 border-1 border-gray-500"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-white" />
              Linkdln
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 font-medium text-center w-[90px] p-1 rounded-lg dark:text-neutral-200 text-sm dark:bg-neutral-900 border-1 border-gray-500"
            >
              <IconMail className="h-4 w-4 text-neutral-800 dark:text-white" />
              Email
            </Link>
          </div>

          <p className="text-neutral-800 dark:text-neutral-50 lg:text-[18px] text-[16px] mt-10 md:text-left ">
            Hugo is a Mexican Frontend Developer with a passion for building
            scalable and efficient web applications using modern technologies
            and best practices in the field of web development and design with a
            focus on user experience.
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-transparent flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-transparent border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
