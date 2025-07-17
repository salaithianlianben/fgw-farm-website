"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import StepItem from "./components/StepItem";
import { useTranslation } from "@/hooks/useTranslation";
import {
  en_steps_of_production,
  kr_steps_of_production,
  vn_steps_of_production,
} from "./data";

const TechnologyPage = () => {
  const { currentLanguage } = useTranslation();

  const steps_of_production =
    currentLanguage === "vn"
      ? vn_steps_of_production
      : currentLanguage === "en"
        ? en_steps_of_production
        : kr_steps_of_production;
  return (
    <>
      <ScrollUp />
      <Hero image_path="/images/hero/technolog-banner.png" />
      <section id="technology" className="overflow-hidden">
        <div className="container">
          <div className="space-y-9 py-20">
            {steps_of_production.map((item, idx) => (
              <StepItem key={idx} idx={idx + 1} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
