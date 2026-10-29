"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="notebook-skip-link"
    >
      {t("skip_to_content")}
    </a>
  );
}
