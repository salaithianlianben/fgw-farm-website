import AboutSectionOne from "@/components/About/AboutSectionOne";
import AreaUses from "@/components/AreaUses";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProductsFeature from "@/components/Products";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata = {
  title:
    "FGW Farm Co., Ltd - Black Soldier Fly Farming & Sustainable Agriculture Solutions",
  description:
    "Leading Vietnamese company specializing in Black Soldier Fly (Hermetia illucens) farming and processing. We transform organic waste into protein-rich animal feed, organic fertilizer, and bio-compost for sustainable agriculture.",
  keywords:
    "black soldier fly, hermetia illucens, sustainable agriculture, organic waste processing, protein animal feed, bio-compost, circular economy, Vietnam",
  openGraph: {
    title: "FGW Farm Co., Ltd - Black Soldier Fly Sustainable Solutions",
    description:
      "Transform organic waste into valuable agricultural products through innovative Black Soldier Fly farming",
    images: ["/images/logo/logo-xanh.png"],
    locale: "en_US",
    alternateLocale: "vi_VN",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />{" "}
      <Hero image_path="/images/hero/3.jpg" header_name="Products" />
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
