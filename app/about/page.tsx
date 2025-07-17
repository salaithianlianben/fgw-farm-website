"use client";

import Hero from "@/components/Hero";
import TimeLine from "@/components/TimeLine";
import { useTranslation } from "@/hooks/useTranslation";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero image_path="/images/hero/about-us-banner.png" />
      <div
        className={`wow fadeInUp mx-auto w-full pt-19 text-center w-full` }
        data-wow-delay=".1s"
      >
        <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
          {t('about.farm_history')}
        </h2>
        <div className=" flex justify-center">
          <p className="text-body-color text-base leading-relaxed! md:text-lg sm:w-[90vw] md:w-[65vw]">
            {
              t('about.about_detail')
            }
          </p>
        </div>
      </div>
      <TimeLine />
    </>
  );
};

export default AboutPage;
