import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { SEOHeadProps } from "./SEOHead.types";

const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = "https://leveluptraining.nl/og-image.jpg",
  url = "https://leveluptraining.nl/",
  locale,
}: SEOHeadProps) => {
  const { i18n } = useTranslation();
  const currentLocale = locale || i18n.language;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Update basic meta tags
    if (description) {
      updateMetaTag("description", description);
      updateMetaTag("og:description", description);
      updateMetaTag("twitter:description", description);
    }

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    if (title) {
      updateMetaTag("og:title", title);
      updateMetaTag("twitter:title", title);
    }

    updateMetaTag("og:url", url);
    updateMetaTag("twitter:url", url);
    updateMetaTag("og:image", ogImage);
    updateMetaTag("twitter:image", ogImage);

    // Update language
    document.documentElement.lang = currentLocale;
    updateMetaTag("language", currentLocale);
    updateMetaTag("og:locale", getOGLocale(currentLocale));
  }, [title, description, keywords, ogImage, url, currentLocale]);

  return null; // This component doesn't render anything
};

const getOGLocale = (locale: string): string => {
  const localeMap: Record<string, string> = {
    en: "en_US",
    nl: "nl_NL",
    es: "es_ES",
  };
  return localeMap[locale] || "en_US";
};

export default SEOHead;
