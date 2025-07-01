"use client";

import { ProductsData } from "./data/products";
import ProductItem from "./components/ProductItem";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";

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
          <div className="space-y-5">
            {ProductsData.map((p, idx) => (
              <ProductItem key={idx} index={idx + 1} item={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
