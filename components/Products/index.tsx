import { Product } from "@/types/product";
import SectionTitle from "../Common/SectionTitle";
import ProductItem from "./ProductItem";

const ProductsFeature = ({ data = [] }: { data?: Product[]}) => {
    return <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Products"
            paragraph="Explore our range of sustainable, high-quality products made from Black Soldier Fly larvae — including dried larvae, protein powder, .."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {data.map((feature) => (
              <ProductItem key={feature.id} product={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
}

export default ProductsFeature;