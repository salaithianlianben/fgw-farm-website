"use client";

import { useTranslation } from "@/hooks/useTranslation";

const NewsHero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[url('/images/hero/factory_indoor.png')] bg-cover bg-start pb-16 pt-[100px] md:pb-[100px] md:pt-[130px] xl:pb-[150px] xl:pt-[160px] 2xl:pb-[180px] 2xl:pt-[190px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {t('navigation.news')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsHero;
