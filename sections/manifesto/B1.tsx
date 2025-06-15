import ryan from "@/assets/ryan.svg";
import { useI18n } from "@/hooks/useI18n";
import { motion } from "motion/react";

interface B1Props {
  bgImageSrc: string;
}

const B1 = ({ bgImageSrc }: B1Props) => {
  const { t } = useI18n();

  if (!t) return null;

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <motion.div
        className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xs shadow-xl"
        style={{
          backgroundImage: `url(${bgImageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
      >
        <div className="relative p-6 sm:p-8 md:p-12">
          <motion.div
            className="relative mb-6 md:mb-10 border-b border-gray-600/30 pb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-gray-800 font-title text-2xl sm:text-3xl font-bold lg:text-5xl">
              Find your spark by getting lost.
            </h2>
          </motion.div>

          <motion.div
            className="relative flex flex-col gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
              {t("b1.content1")}
            </p>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
              {t("b1.content2")}
            </p>
          </motion.div>

          <motion.div
            className="relative mt-6 md:mt-10 flex flex-col gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base lg:text-lg">
              {t("b1.content3")}
            </p>
            <motion.img
              src={ryan.src}
              alt="ryan"
              className="absolute right-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{
                rotate: 5,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default B1;
