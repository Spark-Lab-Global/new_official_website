import { getLangFromPath, useTranslations } from "@/i18n/utils";
import { useEffect, useState } from "react";

export function useI18n() {
  const [t, setT] = useState<ReturnType<typeof useTranslations>>();

  useEffect(() => {
    const lang = getLangFromPath(window.location.pathname) as "zh" | "en";
    const tFunc = useTranslations(lang);
    setT(() => tFunc);
  }, []);

  return { t };
}
