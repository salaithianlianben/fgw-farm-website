"use client";

import NewsHero from "@/components/NewsHero";
import { News } from "./StaticTypes";
import NewsCard from "./components/NewsCard";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";

const news_data = [
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "바이오연료 열풍 다시 부나…항공‧선박도 적용 검토",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명 2050 탄소중립 비전에서 확대 필요성 언급RFS 내년 7월 개정, 혼합률 상향 및 대상 추가 유력타격 입는 석유업계도 “글로벌 트렌드” 수긍 입장",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
  {
    title: "비에스에프팜만의 특별한 동애등에 먹이원 !!!",
    content:
      "일반적으로 동애등에 먹이원은 습식사료(음식물류폐기물을 선별, 분쇄하고 100°C로 30분이상 끓여서 멸균한 것)를 사용하고 있지만, 우리 BSF팜은 천연 미생물제제(상품명",
    img_url:
      "https://themes.pixelwars.org/faktory/demo-01/wp-content/uploads/sites/2/2025/05/victor-2PJMDIgK9EA-unsplash-550x362.jpg",
  },
] as News[];

const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewsHero />
      <Breadcrumb
        pageName={t("navigation.news")}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section id="news" className="overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {news_data.map((n, idx) => (
              <NewsCard key={idx} news={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
