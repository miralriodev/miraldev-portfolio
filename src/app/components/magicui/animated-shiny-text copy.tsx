import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";
import { SparklesText } from "@/app/components/magicui/sparkles-text";
import { cn } from "@/app/lib/utils";

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
  golden?: boolean;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  golden = false,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        golden ? "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70":"mx-auto max-w-md text-neutral-600/70 dark:text-yellow-400/70",

        // Shine effect
         "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
