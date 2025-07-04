"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const [isOpen, setOpen] = useState(false);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="space-y-4 border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {"FGW FARM Company"}
              </h2>
              <p className="whitespace-pre-line text-base !leading-relaxed text-body-color md:text-lg">
                {
                  "Founded in 2022, FGW FARM CO.,LTD is a leading Vietnamese enterprise specializing in the farming and processing of Black Soldier Fly (Hermetia illucens) to promote sustainable agriculture and circular economy solutions. With a strong commitment to innovation, environmental responsibility, and food security, we transform organic waste into high-value products such as protein-rich animal feed, organic fertilizer, and bio-compost. Our company always sets the motto “customer-centered”, and the mission of bringing quality, nutritious products to consumers. \n\n Our main operations are based in Vietnam, with production facilities strategically located in Tay Ninh Province, Binh Duong Province, and Cu Chi District to optimize sourcing, processing, and distribution efficiency. Each facility is equipped with advanced insect farming technology, ensuring consistent product quality and strict hygiene standards that meet both local and international requirements. "
                }
              </p>
            </div>

            <div className="w-full pt-9 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/19] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                      data-wow-delay=".15s"
                    >
                      <div className="relative aspect-[77/40] items-center justify-center">
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
            <p className="whitespace-pre-line text-base !leading-relaxed text-body-color md:text-lg">
              {
                "FGW FARM Company – Direct manufacturer of Black Soldier Fly larvae (calcium worm) in dried form, powder, and essential oil. At FGW FARM CO.,LTD, we believe that insects are the future of sustainable agriculture. By harnessing the power of the Black Soldier Fly, we help reduce organic waste, lower carbon emissions, and create alternative protein sources for livestock, aquaculture, and pets. Our dedicated R&D team continually explores new applications of insect biomass, contributing to a greener and more resilient food system. \n\n We are committed to improving product and service quality, ensuring supply, expanding industries and providing wide product coverage through partners, supermarkets and retail distribution channels nationwide. We proudly collaborate with farmers, partners, and institutions across Vietnam and beyond, aiming to scale up environmentally friendly practices and support rural development. As we grow, we remain driven by a simple mission: to turn waste into value and build a more sustainable future for all. Explore our website to learn more about our products, technologies, and how we are shaping the future of insect farming in Southeast Asia."
              }
            </p>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="wrsVSoPU6YE"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default AboutSectionOne;

//
