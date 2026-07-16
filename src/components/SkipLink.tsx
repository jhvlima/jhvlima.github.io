"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-blue-700 px-4 py-2 font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
    >
      {t("skip_to_content")}
    </a>
  );
}
