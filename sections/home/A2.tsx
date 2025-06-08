import a from "@/assets/a2/a.svg";
import { useTranslations } from "@/i18n/utils";

interface A2Props {
  t: ReturnType<typeof useTranslations>;
  imageSrc?: string;
  translatePath: (path: string) => string;
}

const A2 = ({ t, translatePath, imageSrc }: A2Props) => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10">
        <h2 className="font-title text-3xl font-bold lg:text-5xl">
          <span className="text-foreground">Find your </span>
          <span className="text-mobai-orange decoration-mobai-orange">
            Spark
          </span>
          <span className="text-foreground"> by getting lost.</span>
        </h2>
        {/* <div className="relative flex flex-col gap-1"> */}
        <p className="text-mobai-gray font-body text-base whitespace-pre-line lg:text-lg">
          {t("a2.content1")}
        </p>
        <img
          src={imageSrc}
          alt="Find your spark by getting lost"
          className="w-full"
        />
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-1">
        <nav>
          <ul className="text-mobai-gray flex flex-row items-center gap-2 text-base lg:text-lg">
            <li>
              <a
                href={translatePath("/manifesto")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.manifesto")}
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href={translatePath("/portfolio")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.portfolio")}
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href={translatePath("/people")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.people")}
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href={translatePath("/apply")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.apply")}
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-mobai-gray text-base lg:text-lg">
          {t("a2.content2")}
        </p>
      </div>
    </div>
  );
};

export default A2;
