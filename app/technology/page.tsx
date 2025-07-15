import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { steps_of_production } from "./data";
import StepItem from "./components/StepItem";

const TechnologyPage = () => {
  return (
    <>
      <ScrollUp />
      <Hero image_path="/images/hero/technolog-banner.png" />
      <section id="technology" className="overflow-hidden">
        <div className="container">
         <div className="space-y-9 py-20">
           {steps_of_production.map((item, idx) => (
            <StepItem key={idx} idx={idx + 1} item={item} />
          ))}
         </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
