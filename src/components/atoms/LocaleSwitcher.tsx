"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale(); // "en" أو "ar"

  const nextLocale = locale === "en" ? "ar" : "en";

  const handleClick = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        bottom-4
        right-4
        w-14
        h-14
        rounded-full
        bg-primary text-white
        flex items-center justify-center
        text-md
        shadow-xl
        hover:scale-104
        transition
        cursor-pointer
      "
    >
      {locale.toUpperCase()}
    </button>
  );
}
