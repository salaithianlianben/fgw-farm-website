export interface ProductData {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export const ProductsData: ProductData[] = [
  {
    id: 1,
    description:
      "Calcium worm oil is a natural nutritional source made from 100% dried calcium worms, extracted using high-pressure pressing. Rich in unsaturated fatty acids like lauric, myristic, and palmitic acid, it supports healthy growth, enhances coloration in Koi fish, and improves immune function.",
    image_url: "/images/products/black_soldier_fly_oil.png",
    name: "Black Fly Larvae Oil",
  },
  {
    id: 2,
    description:
      "This 100% natural, eco-friendly fertilizer is made from the frass (waste) of black soldier fly larvae. It contains nitrogen, phosphorus, potassium, chitin, and beneficial microbes that improve soil health, enhance root growth, and increase plant resistance to pests and diseases.",
    image_url: "/images/products/black_soldier_fly_fertilizer.png",
    name: "Black Fly Larvae Fertilizer",
  },
  {
    id: 3,
    description:
      "Calcium worm powder (Black Soldier Fly Larvae Meal) is a nutrient-rich feed ingredient ideal for livestock, poultry, and aquaculture. It promotes weight gain, strengthens bones, enhances eggshell quality, and boosts immunity thanks to its high protein, calcium, and mineral content.",
    image_url: "/images/products/black_soldier_fly_powder.png",
    name: "Black Fly Larvae Powder",
  },
  {
    id: 4,
    description:
      "Dried calcium worms (black soldier fly larvae) are carefully cleaned and processed using advanced microwave drying technology, effectively eliminating harmful bacteria like E. coli and Salmonella. Rich in protein, calcium, and healthy fats, they are suitable for a wide range of pets including poultry, aquatic pets, reptiles, birds, and small animals.",
    image_url: "/images/products/dried_black_soldier_fly_larvae.png",
    name: "Dried Black Fly Larvae",
  },
  {
    id: 5,
    description:
      "50 grams of BSF eggs can yield 160–400 kg of fresh larvae under optimal conditions. These calcium worm eggs are laid by the Black Soldier Fly and develop into nutrient-rich larvae commonly used for animal feed. Incubation: Use substrates like rice bran, soybean pulp, or fruit scraps. Maintain moisture and airflow for successful hatching in 24–48 hours. ",
    image_url: "/images/products/black_fly_larvae_eggs.png",
    name: "Black Fly Larvae Eggs",
  },
];
