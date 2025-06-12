"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
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
      className="w-full font-sans"
      ref={containerRef}
    >
      {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div> */}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-16 md:pt-32 lg:pt-40"
          >
            <div className="sticky flex flex-row items-center top-20 md:top-28 lg:top-40 self-start w-full md:w-1/3 lg:max-w-xs z-40 pl-4 md:pl-8">
              <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-md">
                <div className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="pl-4 md:pl-6 text-5xl md:text-5xl lg:text-7xl font-bold text-white font-title">
                {item.title}
              </h3>
            </div>

            <div className="pl-16 md:pl-8 pr-4 md:pr-8 lg:pr-16 w-full md:w-2/3 mt-4 md:mt-0">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 md:left-12 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
