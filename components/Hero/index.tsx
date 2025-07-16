// "use client";

// import { useState, useEffect } from 'react';

// const images_set = [
//   "/images/hero/3.jpg",
//   "/images/hero/6.png",
//   "/images/hero/5.jpg",
//   "/images/hero/1.jpg",
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === images_set.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex(currentIndex === 0 ? images_set.length - 1 : currentIndex - 1);
//   };

//   const goToNext = () => {
//     setCurrentIndex(currentIndex === images_set.length - 1 ? 0 : currentIndex + 1);
//   };

//   return (
//     <section
//       id="home"
//       className="relative z-10 overflow-hidden pt-[120px] h-[70vh] min-h-[500px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
//       onMouseEnter={() => setIsAutoPlaying(false)}
//       onMouseLeave={() => setIsAutoPlaying(true)}
//     >
//       <div className="absolute inset-0 z-0">
//         {images_set.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ backgroundImage: `url('${image}')` }}
//           />
//         ))}
//       </div>

//       <div className="absolute inset-0 z-5 bg-opacity-40"></div>

//       {/* <button
//         onClick={goToPrevious}
//         className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-20 p-2 text-white transition-all duration-300 hover:bg-opacity-30 hover:scale-110 backdrop-blur-sm"
//         aria-label="Previous image"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-20 p-2 text-white transition-all duration-300 hover:bg-opacity-30 hover:scale-110 backdrop-blur-sm"
//         aria-label="Next image"
//       >
//         <ChevronRight size={24} />
//       </button> */}

//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
//         {images_set.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 w-3 rounded-full hover:border hover:border-2 hover:border-primary transition-all duration-300 ${
//               index === currentIndex
//                 ? 'bg-gray-200 scale-125 border border-primary'
//                 : 'bg-gray-200 bg-opacity-50 hover:bg-opacity-75'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-4">
//         <div className="flex flex-wrap">
//           <div className="flex w-full flex-row justify-end">
//             <div
//               className="max-w-[800px] text-center transform transition-all duration-1000 opacity-100"
//               style={{
//                 animation: `fadeInUp 1s ease-out ${currentIndex * 0.1}s both`
//               }}
//             >
//               {/* <h1 className="mb-5 text-3xl leading-tight font-bold text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight drop-shadow-lg">
//                 블랙 솔저 플라이 사육으로 지구를 살리고, 자원을 순환시킵니다.
//               </h1> */}
//               <p className="text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl drop-shadow-md">
//                 블랙 솔저 플라이 사육으로 지구를 살리고, 자원을 순환시킵니다.
//               </p>
//               <p className="mb-12 text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl drop-shadow-md">
//                 {"'지속 가능한 미래, 곤충에서 시작됩니다.'"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white bg-opacity-20">
//         <div
//           className="h-full bg-white transition-all duration-300 ease-linear"
//           style={{
//             width: `${((currentIndex + 1) / images_set.length) * 100}%`
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

interface HeroProps {
  image_path: string;
  content?: string;
  header_name?: string;
}

const Hero = ({ image_path, content = "Sustainable insect protein", }: HeroProps) => {
  return (
    <section
      id="product"
      className="relative z-10 overflow-hidden h-[50vh] pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] flex items-center justify-center"
    >
      {/* Image */}
      <img
        src={image_path}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="container relative z-20">
        <div className="flex flex-wrap">
          <div className="flex w-full flex-row justify-start px-4">
            <div
              className="wow fadeInUp text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-start text-xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                {"블랙 솔저 플라이 사육으로 지구를 살리고, 자원을 순환시킵니다"}
              </h1>
              <h1 className="mb-5 text-start text-xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                {"지속 가능한 미래, 곤충에서 시작됩니다."}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute z-20 bottom-0 left-60 bg-white shadow-lg p-5 h-[130px] w-[140px] text-primary">
        <h1>{header_name}</h1>
        <ArrowRight />
      </div> */}
    </section>
  );
};

export default Hero;
