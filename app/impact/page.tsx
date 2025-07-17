"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import RecycleProcess from "./components/RecycleProcess";
import { useTranslation } from "@/hooks/useTranslation";
import {
  en_extra_steps,
  en_recycling_process,
  vn_extra_steps,
  vn_recycling_process,
} from "./data";

const ImpactPage = () => {
  const { currentLanguage } = useTranslation();

  const recycling_process =
    currentLanguage === "en"
      ? en_recycling_process
      : currentLanguage === "vn"
        ? vn_recycling_process
        : en_recycling_process;

  const extra_steps_ =
    currentLanguage === "en"
      ? en_extra_steps
      : currentLanguage === "vn"
        ? vn_extra_steps
        : en_extra_steps;

  return (
    <>
      <ScrollUp />
      <Hero image_path="/images/hero/impact-banner.png" />
      <section id="impact" className="overflow-hidden">
        <div className="container space-y-8 py-20">
          <div>
            {/* <div className="grid grid-cols-3 gap-2"> */}
            <RecycleProcess />
            {/* </div> */}
            <div className="py-3">
              <h1 className="text-2xl">{recycling_process.title}</h1>
              <p>{recycling_process.content}</p>
            </div>
          </div>
          {extra_steps_.map((s, idx) => (
            <div key={idx}>
              <img
                src="/images/impact/Alternative protein & oil.jpg"
                alt="Alternative protein and oil"
                className="h-auto max-h-[400px] w-full object-cover"
              />
              <div className="py-3">
                <h1 className="text-2xl">{s.title}</h1>
                <p>{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImpactPage;
