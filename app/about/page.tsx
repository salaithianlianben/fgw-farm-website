"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        pageName={t(`about.about`)}
        description={t(`about.short_title`)}
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
