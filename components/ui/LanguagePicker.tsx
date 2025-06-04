import { languages } from "@/i18n/utils";
import { useTranslatedPath } from "@/i18n/utils";

interface LanguagePickerProps {
  currentPath?: string;
  testColor: string;
}

const LanguagePicker = ({
  currentPath = "/",
  testColor,
}: LanguagePickerProps) => {
  const getPathWithoutLang = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
      return "/" + segments.slice(1).join("/");
    }
    return path;
  };

  const getCurrentLang = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
      return segments[0];
    }
    return "zh";
  };

  const basePath = getPathWithoutLang(currentPath);
  const currentLang = getCurrentLang(currentPath);

  const targetLang = currentLang === "zh" ? "en" : "zh";
  const targetLabel = languages[targetLang as keyof typeof languages];

  const getPathForLang = useTranslatedPath(
    targetLang as keyof typeof languages,
  );

  return (
    <div
      className={`flex h-9 flex-row items-center justify-center gap-2 rounded-full border-2 border-[#3A3A3A] px-3 font-bold ${testColor}`}
    >
      <a href={getPathForLang(basePath)}>{targetLabel}</a>
    </div>
  );
};

export default LanguagePicker;
