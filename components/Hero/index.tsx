"use client";

const images_set = [
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/1.jpg",
];
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: `url('${images_set[0]}')` }}
      >
        {/* Dark overlay */}
        <div className={`absolute inset-0 z-0 bg-black bg-opacity-20`}></div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full flex-row justify-end px-4">
              <div
                className="wow fadeInUp max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  전염병의 창궐로 매우 심각한 위기에 놓여 있습니다
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-gray-200 sm:text-lg md:text-xl">
                  인류가 함께 숨 쉬고 살고 있는 지구환경은 현재 기후 온난화로
                  인한 각종 환경 재해, 식량의 분배 및 처리 문제와 수많은
                  전염병의 창궐로 매우 심각한 위기에 놓여 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
