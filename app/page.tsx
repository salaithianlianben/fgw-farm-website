import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProductsFeature from "@/components/Products";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FGW FARM",
  description: "FGW FARM CO., LTD",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProductsFeature/>
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials />
      <Pricing />
      <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
