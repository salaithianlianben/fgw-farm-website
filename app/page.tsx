import AboutSectionOne from "@/components/About/AboutSectionOne";
import AreaUses from "@/components/AreaUses";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProductsFeature from "@/components/Products";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "FGW FARM CO., LTD",
};

export default function Home() {
  return (
    <>
      <ScrollUp /> <Hero image_path="/images/hero/3.jpg" header_name="Products"/>
      <ProductsFeature />
      <AreaUses />
      
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Contact /> */}
    </>
  );
}
