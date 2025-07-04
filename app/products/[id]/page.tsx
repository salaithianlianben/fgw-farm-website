"use client";

import { useEffect, useState } from "react";
import { products_data } from "../data/products";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ productData, setProductData] = useState<Product | undefined>();
  useEffect(() => {
    if (id) {
      setProductData(products_data.find((item) => item.id === Number(id)));
    }
  }, [id]);
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          {productData ? (
            <>
              <div className="space-y-3 border-b pb-8">
                <h1 className="text-3xl font-bold">{productData.name}</h1>
              </div>
              <div className="space-y-2 py-5">
                <div className="flex items-start justify-start rounded-lg">
                  <img
                    src={productData.image_url}
                    className="h-[600px] rounded-lg object-contain"
                  />
                </div>
                <p className="whitespace-pre-line leading-9">
                  {productData.description}
                </p>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
