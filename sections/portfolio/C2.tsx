import { useTranslations } from "@/i18n/utils";

interface C2Props {
  t: ReturnType<typeof useTranslations>;
  imageSrc?: string;
}

const C2 = ({ t, imageSrc }: C2Props) => {
  return (
    <div className="px-10 pb-20">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-20">
          <img src={imageSrc} alt="Lean Startup" />
          <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
            {t("c2.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default C2;
