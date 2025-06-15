import { useTranslations } from "@/i18n/utils";

interface C2Props {
  t: ReturnType<typeof useTranslations>;
  imageSrc?: string;
}

const C2 = ({ t, imageSrc }: C2Props) => {
  const content = t("c2.content") as string;

  return (
    <div className="px-10 pb-20">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-20">
          <img src={imageSrc} alt="Lean Startup" />

          <div className="text-mobai-gray w-full text-base lg:text-lg">
            <p className="whitespace-pre-line">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C2;
