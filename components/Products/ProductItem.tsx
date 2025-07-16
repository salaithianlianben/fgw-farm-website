"use client";

import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductItemProps {
  product: Product;
  index: number;
}

const ProductItem = ({ product, index }: ProductItemProps) => {
  const { image_url, name, type, id } = product;
  const router = useRouter();

  // Animation variants for the container
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  // Animation variants for the badge
  const badgeVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      className="relative bg-primary/10 flex h-[350px] w-full cursor-pointer flex-col rounded p-3 py-6"
      onClick={() => router.push(`/products/${id}`)}
    >
      <motion.img
        src={image_url}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className="h-full w-full object-contain"
      />
      
      <motion.div
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.3,
          delay: index * 0.1 + 0.4,
          ease: "easeOut",
        }}
        className="flex absolute top-5 left-5"
      >
        <div className="bg-primary rounded-full px-3 py-1 text-white">
          <p>{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;