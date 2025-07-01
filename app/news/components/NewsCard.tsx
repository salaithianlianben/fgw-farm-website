"use client";

import { News } from "../StaticTypes";

interface NewsCardProps {
    news: News,
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="flex h-full w-full flex-col space-y-3 rounded shadow cursor-pointer" onClick={()=> console.log("test")}>
      <img src={news.img_url} className="h-[250px] w-full rounded" />
      <div className="space-y-2 px-4 py-3">
        <p className="text-lg text-center">{news.title}</p>
        <p className="text-sm line-clamp-7 text-center">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
