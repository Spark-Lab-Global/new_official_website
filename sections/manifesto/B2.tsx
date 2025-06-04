import whatIsSparkLab from "@/assets/whatIsSparkLab.png";
import { useTranslations } from "@/i18n/utils";

interface B2Props {
  t: ReturnType<typeof useTranslations>;
}

const B2 = ({ t }: B2Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-3xl font-bold underline decoration-2 underline-offset-6 lg:text-5xl">
          What is Spark Lab?
        </h2>
        <div className="flex flex-col items-center gap-10">
          <p className="text-mobai-gray w-full text-base lg:text-lg">
            {t("b2.content1")}
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <img src={whatIsSparkLab.src} alt="Spark Lab" className="w-full" />
            <div className="mt-auto flex flex-col">
              <p className="text-mobai-gray w-full text-base lg:text-lg">
                <span className="font-bold">Mission:</span> {t("b2.content2")}
                <br />
                <span className="font-bold">Vision:</span> {t("b2.content3")}
                <br />
                <span className="font-bold">Values:</span> {t("b2.content4")}
              </p>
              <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
                {t("b2.content5")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2;
