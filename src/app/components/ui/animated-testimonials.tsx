/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
"use client"

import { motion, AnimatePresence, PanInfo } from "motion/react";
import { useEffect, useState } from "react";
import { StaticImageData } from 'next/image';

import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string | StaticImageData;
  id?: string | number;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);

  // Initialize rotations on client side only
  useEffect(() => {
    setRotations(
      Array(testimonials.length).fill(0).map(() => Math.floor(Math.random() * 21) - 10)
    );
  }, [testimonials.length]);

  const getRotation = (index: number) => {
    return rotations[index] || 0; // Default to 0 if not yet initialized
  };

  const handlePanEnd = (event: any, info: PanInfo) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  return (
    <div className="mx-auto w-full max-w-lg pt-4">
      <motion.div 
        className="relative aspect-[7/4] w-full cursor-pointer"
        onPanEnd={handlePanEnd}
      >
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const uniqueKey = testimonial.id !== undefined 
              ? `testimonial-${testimonial.id}` 
              : `testimonial-${index}-${testimonial.name.replace(/\s+/g, '-').toLowerCase()}`;
            
            return (
              <motion.div
                key={uniqueKey}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: getRotation(index),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : getRotation(index),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -40, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: getRotation(index),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
