"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";
import { products_data } from "./data/products";
import ProductItem from "@/components/Products/ProductItem";

const ProductsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        pageName={t("navigation.products")}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section id="products" className="overflow-hidden">
        <div className="container space-y-9">
          <div className=" grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {products_data.map((p, idx) => (
              <ProductItem key={idx} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
