"use client";

import { useRouter } from "next/navigation";
import { News } from "../StaticTypes";

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {

  const router = useRouter();

  return (
    <div
      className="flex h-full w-full cursor-pointer flex-col space-y-3 rounded-lg shadow justify-between"
    >
      <div>
        <img src={news.img_url} className="h-[400px] w-full rounded" />
        <div className="space-y-2 px-4 py-3">
          <p className="text-center text-lg">{news.title}</p>
          <p className="line-clamp-7 whitespace-pre-line text-center text-sm">
            {news.content}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-t p-1 px-2">
        <p className="text-sm text-gray-400">{news.date}</p>
        <button className="flex space-x-1 text-blue-500 hover:text-blue-500" onClick={() => router.push(`/news/${news.id}`)}>
          <p className="text-sm ">{"Read More >>"}</p>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
