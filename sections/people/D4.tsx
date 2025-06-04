import { useTranslations } from "@/i18n/utils";

interface D4Props {
  t: ReturnType<typeof useTranslations>;
}

const D4 = ({ t }: D4Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-3xl font-bold underline decoration-2 underline-offset-6 lg:text-5xl">
          Our Network
        </h2>
        <div className="flex w-full flex-col items-center gap-10">
          <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
            {t("d4.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default D4;
