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
        className="relative z-10 overflow-hidden bg-cover bg-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        style={{ backgroundImage: `url('${images_set[0]}')` }}
      >
        {/* Dark overlay */}
        <div className={`bg-opacity-20 absolute inset-0 z-0`}></div>

        {/* Content */}
        <div className="relative z-10 container">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full flex-row justify-end px-4">
              <div
                className="wow fadeInUp max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl leading-tight font-bold text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  블랙 솔저 플라이 사육으로 지구를 살리고, 자원을 순환시킵니다.
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-gray-200 sm:text-lg md:text-xl">
                  “지속 가능한 미래, 곤충에서 시작됩니다.”
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
