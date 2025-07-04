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
              <div className="space-y-3 border-b pb-8 flex flex-row w-full justify-between items-center">
                <h1 className="text-3xl font-bold">{productData.name}</h1>
                <div className="space-x-2 flex items-center">
                  {productData.alibaba_link && <button className="flex flex-row space-x-2 items-center p-1 rounded border border-yellow hover:bg-orange-500 hover:text-white font-bold text-orange-400" onClick={()=> window.open(productData.alibaba_link, '_target')}>
                      <img src={"/images/logo/alibaba_logo.png"} className="h-8 w-8 rounded"/>
                      <span className="pr-2">Alibaba</span>
                    </button>}
                    {productData.shopee_link && <button className="flex flex-row space-x-2 items-center p-1 rounded border border-yellow hover:bg-orange-500 hover:text-white font-bold text-orange-400" onClick={()=>window.open(productData.shopee_link, '_target')}>
                      <img src={"/images/logo/shopee_logo.png"} className="h-8 w-8 rounded"/>
                      <span className="pr-2">Shopee</span>
                    </button>}
                </div>
              </div>
              <div className="space-y-2 py-5">
                <div className="flex items-start justify-beteween rounded-lg">
                  <img
                    src={productData.image_url}
                    className="h-[600px] w-full rounded-lg object-contain"
                  />
                </div>
                <p className="whitespace-pre-line leading-9">
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
