import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { recycle_process_data } from "./data";
import RecycleProcess from "./components/RecycleProcess";

const ImpactPage = () => {
  return (
    <>
      <ScrollUp />
      <Hero image_path="/images/hero/impact-banner.png" />
      <section id="impact" className="overflow-hidden">
        <div className="container space-y-8 py-20">
          <div>
            {/* <div className="grid grid-cols-3 gap-2"> */}
              <RecycleProcess />
            {/* </div> */}
            <div className="py-3">
              <h1 className="text-2xl">Zero-waste recycling</h1>
              <p>
                남은 음식물을 재활용하는 과정에서 음식물폐수를 배출하지 않고
                음식물 100%를 곤충 단백질로 바이오컨버전 합니다.
              </p>
            </div>
          </div>
          <div>
            <img
              src={"/images/impact/Alternative protein & oil.jpg"}
              className="object-fit h-[400px] w-full"
            />
            <div className="py-3">
              <h1 className="text-2xl">Alternative protein & oil</h1>
              <p>
                사료용으로 사용되는 어린 생선을 대체할 수 있는 곤충 단백질을
                공급하여 해양자원 및 환경을 보전합니다.
              </p>
            </div>
          </div>
          <div>
            <img
              src={"/images/impact/Alternative protein & oil 2.jpg"}
              className="object-fit h-[400px] w-full"
            />
            <div className="py-3">
              <h1 className="text-2xl">Alternative protein & oil</h1>
              <p>
                사료용 곡물, 팜 오일 대체할 수 있는 곤충단백질과 오일을 공급하여
                사막화와 생물다양성 손실을 방지합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;
