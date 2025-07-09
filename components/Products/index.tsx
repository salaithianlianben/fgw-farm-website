"use client";

import { Product } from "@/types/product";
import SectionTitle from "../Common/SectionTitle";
import ProductItem from "./ProductItem";
import { useTranslation } from "@/hooks/useTranslation";
import { en_products_data, vn_products_data } from "@/app/products/data/products";
import { vn_news_data } from "@/app/news/data";

const ProductsFeature = () => {
  const { t, currentLanguage } = useTranslation();
  const data = currentLanguage === "en" ? en_products_data : vn_products_data;

    return <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={t(`products.products`)}
            paragraph={t('products.short_title')}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {data.map((feature) => (
              <ProductItem key={feature.id} product={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
}

export default ProductsFeature;