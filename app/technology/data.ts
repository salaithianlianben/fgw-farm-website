export interface StepsProductionTechnology {
    id: number,
    title: string,
    content: string,
    img_path: string
}

export const steps_of_production = [
    {
        id: 1,
        title: '곤충 먹이 제조 기술',
        content: '식품공장, 가정, 식당, 농장에서 배송된 각종 식품 폐기물을 안전하게 가공하여 곤충 성장률을 극대화하고 폐사율을 최소화 합니다. 나아가 산업별 맞춤형 사료용 곤충을 생산합니다.',
        img_path: '/images/technology/t-16.png'
    },
    {
        id: 2,
        title: '곤충 바이오 컨버전 기술',
        content: '우리의 곤충들은 자연을 모방하는 표준화된 사육 환경에서 번식,사육 되었고 자연 선택과 번식기술을 통해 한국 식품 폐기물을 안정적으로 분해할 수 있는 종자로  발전하였습니다. 리사이클링에 적합한 종자의 곤충들에게 바이오컨버전 기술을 접목하여 짧은 생산 리드타임내에 균일한 품질의 제품을 생산합니다.',
        img_path: '/images/technology/t-7.png'
    },
    {
        id: 3,
        title: '곤충 번식 기술',
        content: '알에서 깨어난 유충은 생존율을 극대화시키는 인큐베이팅 공정을 거쳐 단 10일만에 몸무게가 200배 이상 늘어나며 번데기에서 건강하게 우화한 성충이 단위 체적당 최대한의 산란을 할 수 있게 합니다. ',
        img_path: '/images/technology/t-5.png'
    }
]