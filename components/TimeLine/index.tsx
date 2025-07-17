"use effect";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Timeline = () => {
  const { currentLanguage } = useTranslation();
  const en_timelineData = [
    {
      year: "2025",
      items: ["Export products to Korea"],
    },
    {
      year: "2024",
      items: ["Start to run  factory in Binh Duong province"],
    },
    {
      year: "2023",
      items: ["Top selling product on retail "],
    },
    {
      year: "2022",
      items: [
        "Corporate establishment (FGW FARM Co., Ltd.)",
        "Start to run 2 factories in Tay Ninh province and Cu Chi, Ho Chi Minh city.",
      ],
    },
  ];

  const vn_timelineData = [
    {
      year: "2025",
      items: ["Xuất khẩu sang Hàn Quốc"],
    },
    {
      year: "2024",
      items: ["Bắt đầu hoạt động nhà máy tại tỉnh Bình Dương"],
    },
    {
      year: "2023",
      items: ["Là nhà bán lẻ hàng đầu tại Việt Nam"],
    },
    {
      year: "2022",
      items: [
        "Thành lập Công ty TNHH FGW FARM",
        "Bắt đầu hoạt động 2 nhà máy tại tỉnh Tây ninh và Củ Chi, Thành phố Hồ chí minh",
      ],
    },
  ];

  const timelineData =
    currentLanguage === "en"
      ? en_timelineData
      : currentLanguage === "vn"
        ? vn_timelineData
        : en_timelineData;

  // Animation variants for the timeline line
  const lineVariants = {
    hidden: {
      scaleY: 0,
      originY: 0,
    },
    visible: {
      scaleY: 1,
    },
  };

  // Animation variants for each timeline item
  const itemVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -100 : 100,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  // Animation variants for the timeline dots
  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  // Animation variants for year text
  const yearVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Animation variants for items
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="flex justify-center py-12">
      <div className="container w-full max-w-4xl px-6">
        <div className="relative space-y-9">
          {/* Animated timeline line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-400"
          />

          {timelineData.map((yearData, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={yearData.year}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={isEven}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Animated dot */}
                <motion.div
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.5,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-primary absolute top-2 left-1/2 h-3 w-3 -translate-x-1/2 transform cursor-pointer rounded-full"
                />

                <div className={`w-1/2 ${isEven ? "pr-8" : "ml-auto pl-8"}`}>
                  {/* Animated year */}
                  <motion.div
                    variants={yearVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className={`w-full ${isEven ? "text-right" : "text-left"}`}
                  >
                    <span className={`text-2xl font-bold text-gray-800`}>
                      {yearData.year}
                    </span>
                  </motion.div>

                  {/* Animated items */}
                  {yearData.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.2 + itemIndex * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="mb-3"
                    >
                      <p
                        className={`text-sm leading-relaxed text-gray-700 ${isEven ? "text-right" : "text-left"}`}
                      >
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
