import { useTranslations } from "@/i18n/utils";

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
      <p className="text-foreground font-serif text-3xl font-bold lg:text-5xl">
        {questionText || "Question 1"}
      </p>
      <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
        {answerText ||
          "We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live"}
      </p>
    </>
  );
};

interface B3Props {
  t: ReturnType<typeof useTranslations>;
}

const B3 = ({ t }: B3Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-20">
        <h2 className="text-foreground font-serif text-3xl font-bold lg:text-5xl">
          FAQ
        </h2>
        <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-[minmax(0,320px)_1fr]">
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
        </div>
      </div>
    </div>
  );
};

export default B3;
