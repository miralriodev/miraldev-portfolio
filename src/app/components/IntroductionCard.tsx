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
        className="rounded-full object-fill"
        alt="avatar"
      />
      <div className="flex flex-col">
        <p className="text-neutral-800 dark:text-white text-sm">
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
      <div className="p-4 group-hover/bento:translate-x-2">
        <Regards />
        <div className="mt-6 flex flex-col gap-2">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-neutral-800 dark:text-white text-3xl text-pretty"
            delay={0.5}
          >
            Passionate to purse the technology everyday.
          </TextAnimate>

          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className=" text-gray-500 text-lg"
            delay={0.5}
          >
            I like learning new things and exploring the world of technology. I
            am always eager to learn new skills
          </TextAnimate>
        </div>
      </div>
    </div>
  );
}
