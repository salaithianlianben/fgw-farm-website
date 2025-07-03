import { ProductData } from "./products";

const ProductItem = ({ product }: { product: ProductData }) => {
  const { description, id, image_url, name } = product;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[250px] w-full items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <img src={image_url} className="object-contain w-full h-full"/>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {name}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
