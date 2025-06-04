import a1 from "./a1";
import a2 from "./a2";
import a3 from "./a3";
import b1 from "./b1";
import b2 from "./b2";
import b3 from "./b3";
import c1 from "./c1";
import c2 from "./c2";
import d4 from "./d4";
import ui from "./ui";

const translations = {
  zh: {
    ...ui.zh,
    ...a1.zh,
    ...a2.zh,
    ...a3.zh,
    ...b1.zh,
    ...b2.zh,
    ...b3.zh,
    ...c1.zh,
    ...c2.zh,
    ...d4.zh,
  },
  en: {
    ...ui.en,
    ...a1.en,
    ...a2.en,
    ...a3.en,
    ...b1.en,
    ...b2.en,
    ...b3.en,
    ...c1.en,
    ...c2.en,
    ...d4.en,
  },
};

export const languages = {
  zh: "中文",
  en: "English",
};

export const defaultLang = "zh";

export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof translations) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
