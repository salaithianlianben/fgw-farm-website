"use client";

import { useRouter } from "next/navigation";
import { News } from "../StaticTypes";
import Image from "next/image";
import { motion } from "framer-motion";

interface NewsCardProps {
  news: News;
  index: number;
}

const NewsCard = ({ news, index }: NewsCardProps) => {
  const router = useRouter();

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Even indices from left, odd from right
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="flex h-full w-full cursor-pointer flex-col justify-between space-y-3"
      onClick={() => router.push(`/news/${news.id}`)}
    >
      <div className="flex flex-row">
        <Image
          src={news.img_url}
          alt={news.title || "News article"}
          width={800}
          height={400}
          className="h-[200px] w-full rounded-sm transition-transform duration-300 hover:scale-105"
        />
        <div className="space-y-2 px-4 py-3">
          <p className="text-center text-lg">{news.title}</p>
          <p className="line-clamp-5 text-center text-sm whitespace-pre-line">
            {news.content}
          </p>
          <p className="text-end text-sm text-gray-400">{news.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;