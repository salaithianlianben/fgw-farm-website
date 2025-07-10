"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const vn_first_description = "Được thành lập vào năm 2022, FGW FARM CO.,LTD là doanh nghiệp hàng đầu Việt Nam chuyên nuôi và chế biến Ruồi lính đen (Hermetia illucens) để thúc đẩy nông nghiệp bền vững và các giải pháp kinh tế tuần hoàn. Với cam kết mạnh mẽ về đổi mới, trách nhiệm với môi trường và an ninh lương thực, chúng tôi chuyển đổi chất thải hữu cơ thành các sản phẩm có giá trị cao như thức ăn chăn nuôi giàu protein, phân hữu cơ và phân hữu cơ sinh học. Công ty chúng tôi luôn đặt phương châm “lấy khách hàng làm trung tâm” và sứ mệnh mang đến những sản phẩm chất lượng, bổ dưỡng cho người tiêu dùng. \n Hoạt động chính của chúng tôi có trụ sở tại Việt Nam, với các cơ sở sản xuất được đặt tại các vị trí chiến lược ở Tỉnh Tây Ninh, Tỉnh Bình Dương và Huyện Củ Chi để tối ưu hóa hiệu quả tìm nguồn cung ứng, chế biến và phân phối. Mỗi cơ sở đều được trang bị công nghệ nuôi côn trùng tiên tiến, đảm bảo chất lượng sản phẩm đồng nhất và tiêu chuẩn vệ sinh nghiêm ngặt đáp ứng các yêu cầu của cả địa phương và quốc tế."
const en_first_description = "Founded in 2022, FGW FARM CO.,LTD is a leading Vietnamese enterprise specializing in the farming and processing of Black Soldier Fly (Hermetia illucens) to promote sustainable agriculture and circular economy solutions. With a strong commitment to innovation, environmental responsibility, and food security, we transform organic waste into high-value products such as protein-rich animal feed, organic fertilizer, and bio-compost. Our company always sets the motto “customer-centered”, and the mission of bringing quality, nutritious products to consumers. \n Our main operations are based in Vietnam, with production facilities strategically located in Tay Ninh Province, Binh Duong Province, and Cu Chi District to optimize sourcing, processing, and distribution efficiency. Each facility is equipped with advanced insect farming technology, ensuring consistent product quality and strict hygiene standards that meet both local and international requirements. "
const vn_second_description = "Công ty FGW FARM – Nhà sản xuất trực tiếp Ấu trùng Ruồi lính đen (Sâu canxi) dưới dạng khô, bột và tinh dầu. Tại FGW FARM CO.,LTD, chúng tôi tin rằng côn trùng là tương lai của nền nông nghiệp bền vững. Bằng cách khai thác sức mạnh của Ruồi lính đen, chúng tôi giúp giảm chất thải hữu cơ, giảm lượng khí thải carbon và tạo ra nguồn protein thay thế cho chăn nuôi, nuôi trồng thủy sản và vật nuôi. Đội ngũ R&D tận tụy của chúng tôi liên tục khám phá các ứng dụng mới của sinh khối côn trùng, góp phần tạo nên một hệ thống thực phẩm xanh hơn và bền vững hơn. \n Chúng tôi cam kết cải thiện chất lượng sản phẩm và dịch vụ, đảm bảo nguồn cung, mở rộng ngành công nghiệp và cung cấp phạm vi sản phẩm rộng rãi thông qua các đối tác, siêu thị và kênh phân phối bán lẻ trên toàn quốc. Chúng tôi tự hào hợp tác với nông dân, đối tác và các tổ chức trên khắp Việt Nam và xa hơn nữa, với mục tiêu mở rộng các hoạt động thân thiện với môi trường và hỗ trợ phát triển nông thôn. Khi phát triển, chúng tôi vẫn luôn hướng đến một sứ mệnh đơn giản: biến chất thải thành giá trị và xây dựng một tương lai bền vững hơn cho tất cả mọi người. Khám phá trang web của chúng tôi để tìm hiểu thêm về các sản phẩm, công nghệ của chúng tôi và cách chúng tôi định hình tương lai của ngành chăn nuôi côn trùng ở Đông Nam Á."
const en_second_description = "FGW FARM Company – Direct manufacturer of Black Soldier Fly larvae (calcium worm) in dried form, powder, and essential oil. At FGW FARM CO.,LTD, we believe that insects are the future of sustainable agriculture. By harnessing the power of the Black Soldier Fly, we help reduce organic waste, lower carbon emissions, and create alternative protein sources for livestock, aquaculture, and pets. Our dedicated R&D team continually explores new applications of insect biomass, contributing to a greener and more resilient food system. \n We are committed to improving product and service quality, ensuring supply, expanding industries and providing wide product coverage through partners, supermarkets and retail distribution channels nationwide. We proudly collaborate with farmers, partners, and institutions across Vietnam and beyond, aiming to scale up environmentally friendly practices and support rural development. As we grow, we remain driven by a simple mission: to turn waste into value and build a more sustainable future for all. Explore our website to learn more about our products, technologies, and how we are shaping the future of insect farming in Southeast Asia."


const AboutSectionOne = () => {
  const [isOpen, setOpen] = useState(false);
  const { currentLanguage } = useTranslation();

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/15 pb-16 dark:border-white/15 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
                {"FGW FARM CO., LTD"}
              </h2>
              <p className="whitespace-pre-line text-base leading-relaxed! text-body-color md:text-lg">
                {currentLanguage === "vn" ? vn_first_description : en_first_description}
              </p>
            </div>

            <div className="w-full pt-9 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-25/19 lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                      data-wow-delay=".15s"
                    >
                      <div className="relative aspect-77/40 items-center justify-center">
                        <Image
                          src="/images/video/fgw-farm-video2-thumnail.jpg"
                          alt="video image"
                          fill
                        />
                        <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                          <button
                            aria-label="video play button"
                            onClick={() => setOpen(true)}
                            className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                          >
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              className="fill-current"
                            >
                              <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="whitespace-pre-line text-base leading-relaxed! text-body-color md:text-lg">
              {currentLanguage === "vn" ? vn_second_description : en_second_description}
            </p>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="FpEpODV-oTI"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default AboutSectionOne;

//
