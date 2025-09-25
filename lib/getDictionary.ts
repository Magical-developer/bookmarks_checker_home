import "server-only";
import type { Locale } from "./i18n-config";

// 我们明确地列出字典，这样 TypeScript 就能理解它们
const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
