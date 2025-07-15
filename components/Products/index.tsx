"use client";

import { Product } from "@/types/product";
import SectionTitle from "../Common/SectionTitle";
import ProductItem from "./ProductItem";
import { useTranslation } from "@/hooks/useTranslation";
import { en_products_data, vn_products_data } from "@/app/products/data/products";

const ProductsFeature = () => {
  const { t, currentLanguage } = useTranslation();
  const data = currentLanguage === "en" ? en_products_data : vn_products_data;

    return <>
      <section id="features" className="py-16 md:py-15 lg:py-20">
        <div className="container">
          <SectionTitle
            title={t(`products.products`)}
            paragraph={t('products.short_title')}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-3">
            {data.map((feature,idx) => (
              <ProductItem key={feature.id} index={idx} product={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
}

export default ProductsFeature;