export interface StepsProductionTechnology {
  id: number;
  title: string;
  content: string;
  img_path: string;
}

export const steps_of_production = [
  {
    id: 1,
    title: "곤충 먹이 제조 기술",
    content:
      "식품공장, 가정, 식당, 농장에서 배송된 각종 식품 폐기물을 안전하게 가공하여 곤충 성장률을 극대화하고 폐사율을 최소화 합니다. 나아가 산업별 맞춤형 사료용 곤충을 생산합니다.",
    img_path: "/images/technology/t-16.png",
  },
  {
    id: 2,
    title: "곤충 바이오 컨버전 기술",
    content:
      "우리의 곤충들은 자연을 모방하는 표준화된 사육 환경에서 번식,사육 되었고 자연 선택과 번식기술을 통해 한국 식품 폐기물을 안정적으로 분해할 수 있는 종자로  발전하였습니다. 리사이클링에 적합한 종자의 곤충들에게 바이오컨버전 기술을 접목하여 짧은 생산 리드타임내에 균일한 품질의 제품을 생산합니다.",
    img_path: "/images/technology/t-7.png",
  },
  {
    id: 3,
    title: "곤충 번식 기술",
    content:
      "알에서 깨어난 유충은 생존율을 극대화시키는 인큐베이팅 공정을 거쳐 단 10일만에 몸무게가 200배 이상 늘어나며 번데기에서 건강하게 우화한 성충이 단위 체적당 최대한의 산란을 할 수 있게 합니다. ",
    img_path: "/images/technology/t-5.png",
  },
];

export const en_steps_of_production = [
  {
    id: 1,
    title: "Feed control technology",
    content:
      "Through controlled processing of organic waste from farms, supermarkets, households, and food manufacturers, we ensure it is safe and suitable for fly larvae consumption. This process enhances the efficiency of bio-conversion and is tailored to meet diverse customer needs.",
    img_path: "/images/technology/t-16.png",
  },
  {
    id: 2,
    title: "Insect bio conversion technology",
    content:
      "Our insects are selectively bred in a controlled environment that mimics natural conditions. Through natural selection and advanced breeding techniques, we’ve developed seed strains that effectively break down Korean food waste. By combining these specialized insects with bio-conversion technology, we achieve consistent product quality and fast production cycles.",
    img_path: "/images/technology/t-7.png",
  },
  {
    id: 3,
    title: "Insect breeding technology",
    content:
      "The larvae hatch from eggs through an optimized incubation process that maximizes survival rates. Within just 10 days, they grow more than 200 times in weight. This rapid growth results in healthy pupae that produce adult insects with maximum fertility per unit volume.",
    img_path: "/images/technology/t-5.png",
  },
] as StepsProductionTechnology[];

export const kr_steps_of_production = [
    {
        id: 1,
        title: "블랙 솔저 플라이 유충을 위한 먹이원 관리 기술",
        content: "저희는 농장, 대형마트, 가정, 식품 가공 공장 등에서 발생하는 유기성 폐기물을 안전하게 처리하여 블랙 솔저 플라이 유충이 섭취할 수 있도록 철저히 관리하고 있습니다. 이 과정을 통해 생물학적 전환 효율을 높이고, 고객의 요구에 유연하게 대응할 수 있습니다.",
        img_path: "/images/technology/t-16.png",
    },
    {
        id:2,
        title: "곤충 기반 생물 전환 기술",
        content: "저희는 자연환경을 모사한 표준 사육 환경에서 선택적으로 교배된 곤충을 사육하고 있습니다. 자연 선택과 첨단 번식 기술을 통해 음식물 폐기물을 효과적으로 분해할 수 있는 우수한 품종을 개발하였습니다. 이러한 곤충을 생물 전환 기술과 결합함으로써 제품의 품질을 균일하게 유지하고 생산 시간을 단축할 수 있습니다.",
        img_path: "/images/technology/t-7.png",
    },
    {
        id:3,
        title: "곤충 번식 기술",
        content: "블랙 솔저 플라이 유충은 생존율을 극대화하기 위해 최적화된 부화 과정을 통해 알에서 부화합니다. 단 10일 만에 체중이 200배 이상 증가할 수 있으며 이러한 빠른 성장 과정을 거쳐 얻어진 번데기는 높은 개체당 번식력을 가진 건강한 성충으로 성장하게 됩니다.",
        img_path: "/images/technology/t-5.png",
    }
] as StepsProductionTechnology[];


export const vn_steps_of_production = [
    {
        id: 1,
        title: "Công nghệ kiểm soát nguồn thức ăn cho Ấu trùng ruồi lính đen",
        content: "Chúng tôi kiểm soát việc xử lý các loại rác thải hữu cơ từ nông trại, siêu thị, hộ gia đình và nhà máy chế biến thực phẩm để đảm bảo an toàn cho Ấu trùng ruồi lính đen khi chúng tiêu thụ. Quá trình này giúp tăng hiệu quả chuyển hóa sinh học và đáp ứng linh hoạt theo yêu cầu của khách hàng.",
        img_path: "/images/technology/t-16.png",
    },
    {
        id:2,
        title: "Công nghệ chuyển đổi sinh học từ côn trùng",
        content: "Côn trùng của chúng tôi được lai tạo chọn lọc trong môi trường nuôi tiêu chuẩn mô phỏng điều kiện tự nhiên. Thông qua quá trình chọn lọc tự nhiên và kỹ thuật nhân giống tiên tiến, chúng tôi đã phát triển các dòng giống có khả năng phân hủy hiệu quả rác thải thực phẩm. Khi kết hợp với công nghệ chuyển hóa sinh học, những côn trùng này giúp tạo ra sản phẩm đồng đều về chất lượng và rút ngắn thời gian sản xuất.",
        img_path: "/images/technology/t-7.png",
    },
    {
        id:3,
        title: "Công nghệ nhân giống côn trùng",
        content: "Ấu trùng Ruồi lính đen nở ra từ trứng thông qua quy trình ấp được tối ưu hóa nhằm tăng tỷ lệ sống sót. Chỉ trong vòng 10 ngày, chúng có thể tăng trọng lượng gấp hơn 200 lần. Nhờ quá trình phát triển nhanh chóng này, nhộng thu được sẽ cho ra côn trùng trưởng thành khỏe mạnh với khả năng sinh sản tối đa trên mỗi đơn vị thể tích.",
        img_path: "/images/technology/t-5.png",
    }
] as StepsProductionTechnology[];
