import { useTranslations } from "@/i18n/utils";

interface C1Props {
  t: ReturnType<typeof useTranslations>;
}

const WeDontCare = ({ t }: C1Props) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-foreground font-serif text-lg font-bold lg:text-xl">
        We don't care
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 text-base lg:text-lg">
        {(t("c1.weDontCareList") as string[]).map(
          (item: string, index: number) => (
            <li className="pl-4" key={index}>
              <p className="w-full line-through decoration-2">{item}</p>
            </li>
          ),
        )}
      </ol>
    </div>
  );
};

const WeCareAbout = ({ t }: C1Props) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-foreground text-left font-serif text-lg font-bold lg:text-xl">
        We care about
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 text-base lg:text-lg">
        {(t("c1.weCareAboutList") as string[]).map(
          (item: string, index: number) => (
            <li className="pl-4" key={index}>
              <p className="w-full">{item}</p>
            </li>
          ),
        )}
      </ol>
    </div>
  );
};

const C1 = ({ t }: C1Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-20">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-3xl font-bold underline decoration-2 underline-offset-6 lg:text-5xl">
          How We Spark You
        </h2>
        <div className="flex flex-col gap-10">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
            <WeDontCare t={t} />
            <WeCareAbout t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default C1;
