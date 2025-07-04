import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProductsFeature from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { products_data } from "./products/data/products";

export const metadata: Metadata = {
  title: "FGW FARM",
  description: "This is Home for Startup Nextjs Template",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProductsFeature data={products_data}/>
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
