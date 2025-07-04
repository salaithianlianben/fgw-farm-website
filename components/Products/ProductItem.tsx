"use client";

import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

const ProductItem = ({ product }: { product: Product }) => {
  const { image_url, name, short_description, id } = product;
  const router = useRouter();

  return (
    <div className="w-full hover:shadow rounded-lg cursor-pointer" onClick={()=> router.push(`/products/${id}`)}>
      <div className="wow fadeInUp p-3" data-wow-delay=".15s">
        <div className="mb-5 flex h-[400px] py-4 w-full items-center justify-center rounded-md bg-primary/10 bg-opacity-10 text-primary">
          <img src={image_url} className="object-contain w-full h-full hover:scale-130 transition-transform duration-300 ease-in-out"/>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {name}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color whitespace-pre-line">
          {short_description}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
