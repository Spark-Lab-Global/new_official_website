import { useTranslations } from "@/i18n/utils";

interface D4Props {
  t: ReturnType<typeof useTranslations>;
}

const Block = ({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="border-mobai-gray flex flex-col gap-4 rounded-lg border-2 p-4 py-6">
      <div className="border-mobai-gray flex flex-col gap-1 border-b-2 pb-4">
        <p className="text-mobai-orange text-3xl font-bold">{number}</p>
        <p className="text-foreground text-2xl font-semibold">{title}</p>
      </div>
      <p className="text-mobai-gray whitespace-pre-line">{content}</p>
    </div>
  );
};

const D4 = ({ t }: D4Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-20">
        <h2 className="text-foreground font-title text-3xl font-bold lg:text-5xl">
          Our Network
        </h2>
        <div className="flex w-full flex-col items-center gap-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Block
              number={t("d4.block1.number") as string}
              title={t("d4.block1.title") as string}
              content={t("d4.block1.content") as string}
            />
            <Block
              number={t("d4.block2.number") as string}
              title={t("d4.block2.title") as string}
              content={t("d4.block2.content") as string}
            />
            <Block
              number={t("d4.block3.number") as string}
              title={t("d4.block3.title") as string}
              content={t("d4.block3.content") as string}
            />
            <Block
              number={t("d4.block4.number") as string}
              title={t("d4.block4.title") as string}
              content={t("d4.block4.content") as string}
            />
          </div>
          <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
            {t("d4.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default D4;
