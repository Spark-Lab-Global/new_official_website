import { useI18n } from "@/hooks/useI18n";
import { motion } from "motion/react";

const FAQ = ({
  question,
  answer,
}: {
  question?: string | string[];
  answer?: string | string[];
}) => {
  const questionText = Array.isArray(question) ? question.join(" ") : question;
  const answerText = Array.isArray(answer) ? answer.join("\n") : answer;

  return (
    <>
      <motion.p
        className="text-foreground font-title text-3xl font-bold lg:text-5xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {questionText || "Question 1"}
      </motion.p>
      <motion.p
        className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {answerText ||
          "We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live"}
      </motion.p>
    </>
  );
};

const B3 = () => {
  const { t } = useI18n();

  if (!t) return null;

  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-20">
        <motion.h2
          className="text-foreground font-title text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 items-start gap-20 md:grid-cols-[minmax(0,320px)_1fr]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.15 }}
        >
          <FAQ question={t("b3.question1")} answer={t("b3.answer1")} />
          <FAQ question={t("b3.question2")} answer={t("b3.answer2")} />
          <FAQ question={t("b3.question3")} answer={t("b3.answer3")} />
          <FAQ question={t("b3.question4")} answer={t("b3.answer4")} />
          <FAQ question={t("b3.question5")} answer={t("b3.answer5")} />
          <FAQ question={t("b3.question6")} answer={t("b3.answer6")} />
          <FAQ question={t("b3.question7")} answer={t("b3.answer7")} />
          <FAQ question={t("b3.question8")} answer={t("b3.answer8")} />
          <FAQ question={t("b3.question9")} answer={t("b3.answer9")} />
          <FAQ question={t("b3.question10")} answer={t("b3.answer10")} />
        </motion.div>
      </div>
    </div>
  );
};

export default B3;
