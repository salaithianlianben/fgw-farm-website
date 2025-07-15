"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Hero from "@/components/Hero";
import { useTranslation } from "@/hooks/useTranslation";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
    <Hero image_path="/images/hero/about-us-banner.png"/>
      <Breadcrumb
        pageName={t(`about.about`)}
        description={t(`about.short_title`)}
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
