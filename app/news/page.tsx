"use client";

import NewsHero from "@/components/NewsHero";
import { News } from "./StaticTypes";
import NewsCard from "./components/NewsCard";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";
import { news_data } from "./data";

const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewsHero />
      <Breadcrumb
        pageName={t("navigation.news")}
        description={t(`news.short_title`)}
      />
      <section id="news" className="overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {news_data.map((n, idx) => (
              <NewsCard key={idx} news={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
