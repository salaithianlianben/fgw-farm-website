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
          {"FARM ‘S HISTORY"}
        </h2>
        <div className=" flex justify-center">
          <p className="text-body-color text-base leading-relaxed! md:text-lg sm:w-[90vw] md:w-[65vw]">
            {
              "Founded in 2022, FGW FARM CO.,LTD is a leading Vietnamese enterprise specializing in the farming and processing of Black Soldier Fly (Hermetia illucens) to promote sustainable agriculture and circular economy solutions. With a strong commitment to innovation, environmental responsibility, and food security, we transform organic waste into high-value products such as protein-rich animal feed, organic fertilizer, and bio-compost. Our company always sets the motto “customer-centered”, and the mission of bringing quality, nutritious products to consumers."
            }
          </p>
        </div>
      </div>
      <TimeLine />
    </>
  );
};

export default AboutPage;
