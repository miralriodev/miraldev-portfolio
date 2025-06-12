import avatar from "@/app/assets/miralhu-avatar.png";
import { TextAnimate } from "@/app/components/magicui/text-animate";
import Image from "next/image";
import { AnimatedShinyText } from "@/app/components/magicui/animated-shiny-text";


export const Regards = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={avatar}
        width={45}
        height={45}
        className="rounded-full object-cover w-12 h-12 md:w-10 md:h-10 "
        alt="avatar"
        priority
      />
      <div className="flex flex-col">
        <p className="text-neutral-800 dark:text-white lg:text-sm text-base">
          Hi, I&apos;m Hugo.
        </p>
        <AnimatedShinyText>Frontend Developer</AnimatedShinyText>
        {/* <p className="text-gray-500 text-xs">Frontend Developer</p> */}
      </div>
    </div>
  );
};
export default function IntroductionCard() {
  return (
    <div className="group/bento transition duration-200">
      <div className="p-0 md:p-4 group-hover/bento:translate-x-2 lg:py-6 py-4 flex flex-col gap-4">
        <Regards />
        <div className="flex flex-col gap-2 md:gap-4 break-words leading-normal tracking-tighter">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-neutral-800 dark:text-white text-xl xl:text-3xl break-words leading-normal tracking-tighter"
            delay={0.5}
          >
            Passionate to purse the technology everyday and enjoy the life
          </TextAnimate>

          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className=" text-gray-500 text-base md:text-lg break-words leading-normal tracking-tighter"
            delay={0.5}
          >I like learning new things and exploring the world of technology. I am always eager to learn new skills</TextAnimate>
        </div>
      </div>
    </div>
  );
}
