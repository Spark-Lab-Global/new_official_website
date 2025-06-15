import a from "@/assets/e2/a.png";
import b from "@/assets/e2/b.png";
import c from "@/assets/e2/c.png";
import { motion } from "motion/react";

const Block = ({ src, title }: { src: string; title: string }) => {
  return (
    <motion.div
      className="flex flex-1 flex-col gap-4 border-4 border-[#3A3A3A] p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-[4/6] w-full overflow-hidden">
        <motion.img
          src={src}
          alt=""
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-mobai-gray text-xl font-bold">{title}</p>
      </div>
    </motion.div>
  );
};

const E2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <motion.h2
          className="text-foreground font-title text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>
        <motion.div
          className="flex flex-col gap-10 sm:flex-row sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.2 }}
        >
          <Block src={a.src} title="Burning Hacker/20 Fellows" />
          <Block src={b.src} title="AI Hacker House" />
          <Block src={c.src} title="And more……" />
        </motion.div>
      </div>
    </div>
  );
};

export default E2;
