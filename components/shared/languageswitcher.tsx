"use client";

import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "id", label: "Bahasa Indonesia" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const currentLangCode = pathname.split("/")[1];
    const newLanguage = languages.find((lang) => lang.code !== currentLangCode);

    if (newLanguage) {
      const newPath = pathname.split("/").slice(2).join("/");
      router.push(`/${newLanguage.code}/${newPath}`);
    }
  };

  const currentLang = pathname.split("/")[1].toUpperCase();
  const currentLabel = currentLang === "ID" ? "Bahasa Indonesia" : "English";

  return (
    <button
      onClick={toggleLanguage}
      className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2"
    >
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-neutral-900 font-semibold text-xs">
        {currentLang}
      </span>
      <span className="text-xs font-medium">{currentLabel}</span>
    </button>
  );
}
