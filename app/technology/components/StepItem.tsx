"use client";

import { StepsProductionTechnology } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StepItemProps {
  idx: number;
  item: StepsProductionTechnology;
}

const StepItem = ({ idx, item }: StepItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });

  // Animation variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {idx % 2 !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={slideInLeft}
            className="order-2 md:order-1"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.img_path}
                alt={item.title}
                width={700}
                height={300}
                className="h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={slideInRight}
            className="order-1 md:order-2 flex flex-col justify-center space-y-6 px-4 md:px-8"
          >
            <motion.div
              variants={slideInRight}
              className="flex items-center space-x-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                {idx}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {item.title}
              </h2>
            </motion.div>
            
            <motion.p 
              variants={slideInRight}
              className="text-gray-600 leading-relaxed whitespace-pre-line"
            >
              {item.content}
            </motion.p>
          </motion.div>
        </div>
      ) : (
        // Even items: Text left, Image right
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={slideInLeft}
            className="flex flex-col justify-center space-y-6 px-4 md:px-8"
          >
            <motion.div
              variants={slideInLeft}
              className="flex items-center space-x-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                {idx}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {item.title}
              </h2>
            </motion.div>
            
            <motion.p 
              variants={slideInLeft}
              className="text-gray-600 leading-relaxed whitespace-pre-line"
            >
              {item.content}
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={slideInRight}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.img_path}
                alt={item.title || "Item image"}
                width={600}
                height={300}
                className="h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default StepItem;