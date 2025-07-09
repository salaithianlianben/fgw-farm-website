"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { en_news_data, vn_news_data } from "../data";
import { News } from "../StaticTypes";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentLanguage } = useTranslation();
  const [newsItem, setNewsItem] = useState<News | undefined>();
  const news_data = currentLanguage === "vn" ? vn_news_data : en_news_data;

  useEffect(() => {
    if (id) {
      const item = news_data.find((news) => news.id === Number(id));
      setNewsItem(item);
    }
  }, [id, currentLanguage]);

  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <div className="container">
        {newsItem ? (
          <>
            <div className="space-y-3 border-b pb-8">
              <h1 className="text-3xl font-bold">{newsItem.title}</h1>
              <p className="text-gray-500">{"• " + newsItem.date}</p>
            </div>
            <div className="space-y-2 py-5">
              <div className="flex items-start justify-start rounded-lg">
                <Image
                  src={newsItem.img_url}
                  alt={newsItem.title || "News article image"}
                  width={800}
                  height={600}
                  className="h-[600px] rounded-lg object-contain"
                />
              </div>
              <p className="leading-9 whitespace-pre-line">
                {newsItem.content}
              </p>
            </div>
          </>
        ) : (
          <div>News not found.</div>
        )}
      </div>
    </section>
  );
};

export default NewsDetail;
