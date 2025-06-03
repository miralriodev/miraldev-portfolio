import { cn } from "@/app/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6",
        className,
      )}
    >
      {React.Children.map(children, (child, index) => {
        // Add a key to each child if it doesn't already have one
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: child.key || `bento-item-${index}`,
          });
        }
        return child;
      })}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  customContent,
  hasChild,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  customContent?: React.ReactNode;
  hasChild?: boolean;
}) => {
  return (
    <div
      className={cn(
        hasChild ? `group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition duration-200  dark:border-white/[0.2]` : `group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-300 bg-white p-4 transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a]`,
        className,
      )}
    >
      {header}
      {customContent ? (
        customContent
      ) : (
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
