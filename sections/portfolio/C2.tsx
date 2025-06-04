import leanStartup from "@/assets/leanStartup.png";
import { useTranslations } from "@/i18n/utils";

interface C2Props {
  t: ReturnType<typeof useTranslations>;
}

const C2 = ({ t }: C2Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-10">
          <img src={leanStartup.src} alt="Lean Startup" />
          <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
            {t("c2.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default C2;
