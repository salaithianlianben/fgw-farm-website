import { ProductData } from "../StaticTypes";

interface ProductItemProps {
  index: number;
  item: ProductData;
}

const ProductItem = ({ index, item }: ProductItemProps) => {
  return index % 2 !== 0 ? (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-1 flex items-center justify-center">
        <img
          src={item.image_url}
          alt={item.name}
          className="h-[350px] w-[350px] object-cover"
        />
      </div>
      <div className="col-span-2 space-y-4">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-gray-700 whitespace-pre-line">{item.description}</p>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-3">
      <div className="col-span-2 space-y-4">
        <p className="text-xl font-bold">{item.name}</p>
        <p className="text-gray-700 whitespace-pre-line">{item.description}</p>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <img src={item.image_url} className="h-[350px] w-[350px] object-cover" />
      </div>
    </div>
  );
};

export default ProductItem;
