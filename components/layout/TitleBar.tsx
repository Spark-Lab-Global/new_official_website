import SparkLab from "@/components/icon/SparkLab.tsx";
import LanguagePicker from "@/components/ui/LanguagePicker.tsx";
import { useTranslations } from "@/i18n/utils";

interface TitleBarProps {
  currentPath?: string;
  t: ReturnType<typeof useTranslations>;
  translatePath: (path: string) => string;
}

const TitleBar = ({ currentPath = "/", t, translatePath }: TitleBarProps) => {
  const isRoot = currentPath === translatePath("/");
  const textColor = isRoot ? "text-mobai-gray" : "text-foreground";
  const bgColor = "bg-[#BA3C00]";

  return (
    <div className="bg-background top-0 z-50 flex w-full items-center justify-between p-6">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <a href={translatePath("/")}>
          <SparkLab className="h-12 w-12 fill-black" />
        </a>
        <nav className="flex flex-row items-center gap-4">
          <ul
            className={`${textColor} hidden flex-row items-center gap-4 text-xl font-medium md:flex`}
          >
            <li className="hover:underline">
              <a href={translatePath("/")}>{t("nav.about")}</a>
            </li>
            <li className="hover:underline">
              <a href={translatePath("/manifesto")}>{t("nav.manifesto")}</a>
            </li>
            <li className="hover:underline">
              <a href={translatePath("/people")}>{t("nav.people")}</a>
            </li>
            <li className="hover:underline">
              <a href={translatePath("/program")}>{t("nav.program")}</a>
            </li>
            {/* <li className="hover:underline">
              <a href={translatePath("/program")}>{t("nav.program")}</a>
            </li> */}
          </ul>
          <LanguagePicker currentPath={currentPath} testColor={textColor} />
          {/* <a
            href={translatePath("/apply")}
            className={`${bgColor} flex h-9 items-center justify-center rounded-full px-3 font-medium`}
          >
            {t("nav.apply")}
          </a> */}
        </nav>
      </div>
    </div>
  );
};

export default TitleBar;
