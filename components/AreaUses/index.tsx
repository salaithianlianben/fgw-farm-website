"use client";

import { SquareChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const AreaUses = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
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

  const dropFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
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
    <section id="areauses" className="py-10 md:py-20 lg:py-20 bg-gray-100">
      <div className="container space-y-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl">{t('products.apply')}</h1>
            <div className="flex w-full items-center justify-center">
                <div className="w-[50px] h-[2px] bg-black" />
            </div>
          </div>
          <p className="text-center w-[90%] lg:w-[70%] ">
           {t('products.short_apply')}
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3"
        >
          {/* First item - slides in from left */}
          <motion.div 
            variants={slideInLeft}
            className="space-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src="/images/products/28.png"
                className="h-[250px] w-full object-cover hover:scale-105 transition-transform duration-300"
                alt="양계 제품"
              />
            </div>
            <div className="flex flex-row items-center justify-start space-x-2">
              <SquareChevronRight className="h-6 w-6" />
              <p className="text-xl">{t('products.poultry')}</p>
            </div>
          </motion.div>
          
          {/* Second item - drops from top */}
          <motion.div 
            variants={dropFromTop}
            className="space-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src="/images/products/worm-bait.jpg"
                className="h-[250px] w-full object-cover hover:scale-105 transition-transform duration-300"
                alt="양계 제품"
              />
            </div>
            <div className="flex flex-row items-center justify-start space-x-2">
              <SquareChevronRight className="h-6 w-6" />
              <p className="text-xl">양계</p>
            </div>
          </motion.div>
          
          {/* Third item - slides in from right */}
          <motion.div 
            variants={slideInRight}
            className="space-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src="/images/products/25.png"
                className="h-[250px] w-full object-cover hover:scale-105 transition-transform duration-300"
                alt="양계 제품"
              />
            </div>
            <div className="flex flex-row items-center justify-start space-x-2">
              <SquareChevronRight className="h-6 w-6" />
              <p className="text-xl">양계</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaUses;