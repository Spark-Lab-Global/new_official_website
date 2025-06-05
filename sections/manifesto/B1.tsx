import ryan from "@/assets/ryan.svg";
import { useTranslations } from "@/i18n/utils";

interface B1Props {
  t: ReturnType<typeof useTranslations>;
}

const B1 = ({ t }: B1Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex w-fit max-w-screen-xl flex-col gap-20">
        <div className="flex flex-col gap-20">
          <h2 className="text-foreground font-title flex text-3xl font-bold lg:text-5xl">
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
        <div className="relative flex flex-col gap-1">
          <p className="text-mobai-gray text-base whitespace-pre-line lg:text-lg">
            {t("b1.content3")}
          </p>
          <img
            src={ryan.src}
            alt="ryan"
            className="absolute right-0 bottom-0 w-24 lg:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default B1;
