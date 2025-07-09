"use client";

import { useEffect, useState } from "react";
import { en_products_data, vn_products_data } from "../data/products";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const ProductDetail = () => {
  const { currentLanguage } = useTranslation();
  
  const products_data = currentLanguage === "en" ? en_products_data : vn_products_data;

  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<Product | undefined>();
  useEffect(() => {
    if (id) {
      setProductData(products_data.find((item) => item.id === Number(id)));
    }
  }, [id, currentLanguage]);
  
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          {productData ? (
            <>
              <div className="flex w-full flex-row items-center justify-between space-y-3 border-b pb-8">
                <h1 className="text-3xl font-bold">{productData.name}</h1>
                <div className="flex items-center space-x-2">
                  {productData.alibaba_link && (
                    <button
                      className="border-yellow flex flex-row items-center space-x-2 rounded border p-1 font-bold text-orange-400 hover:bg-orange-500 hover:text-white"
                      onClick={() =>
                        window.open(productData.alibaba_link, "_target")
                      }
                    >
                      <Image
                        src="/images/logo/alibaba_logo.png"
                        alt="Alibaba"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded"
                      />
                      <span className="pr-2">Alibaba</span>
                    </button>
                  )}
                  {productData.shopee_link && (
                    <button
                      className="border-yellow flex flex-row items-center space-x-2 rounded border p-1 font-bold text-orange-400 hover:bg-orange-500 hover:text-white"
                      onClick={() =>
                        window.open(productData.shopee_link, "_target")
                      }
                    >
                      <Image
                        src="/images/logo/shopee_logo.png"
                        alt="Alibaba"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded"
                      />
                      <span className="pr-2">Shopee</span>
                    </button>
                  )}
                </div>
              </div>
              <div className="space-y-2 py-5">
                <div className="justify-beteween flex items-start rounded-lg">
                  <Image
                    src={productData.image_url}
                    alt={productData.name || "Product image"}
                    width={800}
                    height={600}
                    className="h-[600px] w-full rounded-lg object-contain"
                  />
                </div>
                <p className="leading-9 whitespace-pre-line">
                  {productData.description}
                </p>
              </div>
            </>
          ) : (
            <div>No Product Data</div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
