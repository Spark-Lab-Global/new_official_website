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
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "zh")) {
      return "/" + segments.slice(1).join("/");
    }
    return path;
  };

  const getCurrentLang = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "zh")) {
      return segments[0];
    }
    return "en";
  };

  const basePath = getPathWithoutLang(currentPath);
  const currentLang = getCurrentLang(currentPath);

  const targetLang = currentLang === "en" ? "zh" : "en";
  const targetLabel = languages[targetLang as keyof typeof languages];

  const getPathForLang = useTranslatedPath(
    targetLang as keyof typeof languages,
  );

  return (
    <div
      className={`flex h-9 flex-row items-center justify-center gap-2 rounded-full border-2 border-[#3A3A3A] px-3 font-medium ${testColor}`}
    >
      <a href={getPathForLang(basePath)}>{targetLabel}</a>
    </div>
  );
};

export default LanguagePicker;
