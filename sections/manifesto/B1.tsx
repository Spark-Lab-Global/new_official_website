import { useTranslations } from "@/i18n/utils";

interface B1Props {
  t: ReturnType<typeof useTranslations>;
}

const B1 = ({ t }: B1Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-3xl font-bold underline decoration-2 underline-offset-6 lg:text-5xl">
            Spark the New Renaissance.
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-mobai-gray text-base lg:text-lg">
              {t("b1.content1")}
            </p>
            <p className="text-mobai-gray text-base lg:text-lg">
              {t("b1.content2")}
            </p>
          </div>
        </div>
        <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
          {t("b1.content3")}
        </p>
      </div>
    </div>
  );
};

export default B1;
