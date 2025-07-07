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
        description="Explore our range of sustainable, high-quality products made from Black Soldier Fly larvae — including dried larvae, protein powder, ..etc. "
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
