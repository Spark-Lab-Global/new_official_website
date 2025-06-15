import { motion } from "motion/react";

const E4 = () => {
  return (
    <motion.div
      className="p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <motion.h2 
          className="text-foreground font-title text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Feedback
        </motion.h2>
        <motion.div 
          className="flex flex-col items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        ></motion.div>
      </div> */}
    </motion.div>
  );
};

export default E4;
