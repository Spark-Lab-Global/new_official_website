import { useTranslations } from "@/i18n/utils";

interface B2Props {
  t: ReturnType<typeof useTranslations>;
  imageSrc?: string;
}

const B2 = ({ t, imageSrc }: B2Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col ">
        <h2 className="text-foreground font-title text-3xl font-bold lg:text-5xl">
          What is Spark Lab?
        </h2>
        <div className="flex flex-col items-center gap-20">
          <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
            {t("b2.content1")}
          </p>
          <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-[1fr_1fr]">
            <img src={imageSrc} alt="Spark Lab" className="w-full" />
            <div className="mt-auto flex flex-col gap-20">
              <div className="text-mobai-gray w-full text-base lg:text-lg space-y-6">
                <div>
                  <span className="text-foreground font-title text-2xl font-bold inline-block mb-5">Mission:</span>
                  <p>{t("b2.content2")}</p>
                </div>
                <div>
                  <span className="text-foreground font-title text-2xl font-bold inline-block mb-5">Vision:</span>
                  <p>{t("b2.content3")}</p>
                </div>
                <div>
                  <span className="text-foreground font-title text-2xl font-bold inline-block mb-5">Values:</span>
                  <p>{t("b2.content4")}</p>
                </div>
              </div>
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
