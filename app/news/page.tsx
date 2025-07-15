"use client";

import NewsCard from "./components/NewsCard";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";
import { en_news_data, vn_news_data } from "./data";
import Hero from "@/components/Hero";

const NewsPage = () => {
  const { t, currentLanguage } = useTranslation();
  const news_data = currentLanguage === "vn" ? vn_news_data : en_news_data;
  
  return (
    <>
      <Hero image_path="/images/hero/news-banner.png" />
      <Breadcrumb
        pageName={t("navigation.news")}
        description={t(`news.short_title`)}
      />
      <section id="news" className="overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-2 lg:grid-cols-2">
            {news_data.map((n, idx) => (
              <NewsCard key={idx} index={idx + 1} news={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
