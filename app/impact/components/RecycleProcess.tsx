"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const RecycleProcess = () => {
  const containerRef = useRef(null);
  const { currentLanguage }  = useTranslation();
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-50px" 
  });
  
  const [visibleSteps, setVisibleSteps] = useState(1);

  // Show steps sequentially when in view
  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setVisibleSteps(prev => {
          if (prev < 6) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 800); // Show next step every 800ms

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Animation variants - all coming from top
  const slideInFromTop = {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const en_steps = [
    {
      id: 1,
      image: "/images/impact/FOOD WASTE.jpg",
      alt: "Food waste",
      title: "Food waste",
      icon: ChevronRight,
      iconRotation: "-rotate-20",
      iconPosition: "absolute right-8 md:right-10 bottom-5 md:bottom-7",
      titlePosition: "absolute right-8 md:right-10 top-16 md:top-20",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute right-0 bottom-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-tl-full border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-white bg-transparent"
    },
    {
      id: 2,
      image: "/images/impact/decomposition.png",
      alt: "Decomposition",
      title: "Decomposition",
      icon: ChevronRight,
      iconRotation: "",
      iconPosition: "absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2",
      titlePosition: "absolute bottom-20 md:bottom-25 left-1/4",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute bottom-10 md:bottom-13 h-[6px] md:h-[8px] w-full bg-white"
    },
    {
      id: 3,
      image: "/images/impact/feed.jpg",
      alt: "Feed production",
      title: "Feed production",
      icon: ChevronRight,
      iconRotation: "rotate-30",
      iconPosition: "absolute bottom-5 md:bottom-7 left-8 md:left-10",
      titlePosition: "absolute bottom-12 md:bottom-15 left-20 md:left-25",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute bottom-0 left-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-tr-full border-t-4 md:border-t-8 border-r-4 md:border-r-8 border-white bg-transparent"
    },
    {
      id: 4,
      image: "/images/impact/food.jpg",
      alt: "Food",
      title: "Food",
      icon: ChevronUp,
      iconRotation: "-rotate-40",
      iconPosition: "absolute top-5 md:top-7 right-8 md:right-10",
      titlePosition: "absolute top-8 md:top-10 right-16 md:right-18",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute top-0 right-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-bl-full border-b-4 md:border-b-8 border-l-4 md:border-l-8 border-white bg-transparent"
    },
    {
      id: 5,
      image: "/images/impact/farming.png",
      alt: "Farming",
      title: "Farming",
      icon: ChevronLeft,
      iconRotation: "",
      iconPosition: "absolute top-7 md:top-10 left-1/2 -translate-x-1/2",
      titlePosition: "absolute top-16 md:top-20 left-32 md:left-38",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute top-10 md:top-13 h-[6px] md:h-[8px] w-full bg-white"
    },
    {
      id: 6,
      image: "/images/impact/food supplier.jpg",
      alt: "Food supply",
      title: "Food supply",
      icon: ChevronLeft,
      iconRotation: "-rotate-20",
      iconPosition: "absolute top-5 md:top-7 left-8 md:left-10",
      titlePosition: "absolute top-12 md:top-15 left-16 md:left-18",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute top-0 left-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-br-full border-r-4 md:border-r-8 border-b-4 md:border-b-8 border-white bg-transparent"
    }
  ];

  const vn_steps = [
    {
      id: 1,
      image: "/images/impact/FOOD WASTE.jpg",
      alt: "Food waste",
      title: "rác thải thực phẩm",
      icon: ChevronRight,
      iconRotation: "-rotate-20",
      iconPosition: "absolute right-8 md:right-10 bottom-5 md:bottom-7",
      titlePosition: "absolute right-8 md:right-10 top-16 md:top-20",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute right-0 bottom-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-tl-full border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-white bg-transparent"
    },
    {
      id: 2,
      image: "/images/impact/decomposition.png",
      alt: "Decomposition",
      title: "phân hủy",
      icon: ChevronRight,
      iconRotation: "",
      iconPosition: "absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2",
      titlePosition: "absolute bottom-20 md:bottom-25 left-1/4",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute bottom-10 md:bottom-13 h-[6px] md:h-[8px] w-full bg-white"
    },
    {
      id: 3,
      image: "/images/impact/feed.jpg",
      alt: "Feed production",
      title: "sản xuất thức ăn chăn nuôin",
      icon: ChevronRight,
      iconRotation: "rotate-30",
      iconPosition: "absolute bottom-5 md:bottom-7 left-8 md:left-10",
      titlePosition: "absolute bottom-12 md:bottom-15 left-20 md:left-25",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute bottom-0 left-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-tr-full border-t-4 md:border-t-8 border-r-4 md:border-r-8 border-white bg-transparent"
    },
    {
      id: 4,
      image: "/images/impact/food.jpg",
      alt: "Food",
      title: "thực phẩm",
      icon: ChevronUp,
      iconRotation: "-rotate-40",
      iconPosition: "absolute top-5 md:top-7 right-8 md:right-10",
      titlePosition: "absolute top-8 md:top-10 right-16 md:right-18",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute top-0 right-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-bl-full border-b-4 md:border-b-8 border-l-4 md:border-l-8 border-white bg-transparent"
    },
    {
      id: 5,
      image: "/images/impact/farming.png",
      alt: "Farming",
      title: "nông nghiệp",
      icon: ChevronLeft,
      iconRotation: "",
      iconPosition: "absolute top-7 md:top-10 left-1/2 -translate-x-1/2",
      titlePosition: "absolute top-16 md:top-20 left-32 md:left-38",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute top-10 md:top-13 h-[6px] md:h-[8px] w-full bg-white"
    },
    {
      id: 6,
      image: "/images/impact/food supplier.jpg",
      alt: "Food supply",
      title: "thức ăn hỗ trợ thức ăn chăn nuôi",
      icon: ChevronLeft,
      iconRotation: "-rotate-20",
      iconPosition: "absolute top-5 md:top-7 left-8 md:left-10",
      titlePosition: "absolute top-12 md:top-15 left-16 md:left-18",
      titleWidth: "w-[80px] md:w-[100px]",
      decorativeElement: "absolute top-0 left-0 h-[50px] w-[70px] md:h-[60px] md:w-[80px] rounded-br-full border-r-4 md:border-r-8 border-b-4 md:border-b-8 border-white bg-transparent"
    }
  ];

  const steps = currentLanguage === "en" ? en_steps : currentLanguage === "vn" ? vn_steps : en_steps

  return (
    <div
      ref={containerRef}
      className="space-y-0 grid grid-cols-3 gap-2"
    >
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        const isVisible = index < visibleSteps;
        
        return (
          <motion.div
            key={step.id}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="relative h-[200px] md:h-[250px] w-full overflow-hidden"
          >
            <img
              src={step.image}
              className="h-full w-full object-cover"
              alt={step.alt}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/25" />
            
            <motion.div 
              variants={scaleIn}
              className={step.decorativeElement}
            />
            
            <motion.div 
              variants={scaleIn}
              className={`${step.iconPosition} rounded-full bg-white p-1 shadow-lg hover:scale-110 transition-transform duration-200`}
            >
              <IconComponent className={`h-4 w-4 md:h-6 md:w-6 ${step.iconRotation} text-black`} />
            </motion.div>
            
            <motion.p 
              variants={slideInFromTop}
              className={`${step.titlePosition} text-2xl md:text-4xl font-semibold text-shadow text-white ${step.titleWidth}`}
            >
              {step.title}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RecycleProcess;