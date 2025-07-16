import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2025",
      items: ["Export products to Korea"],
    },
    {
      year: "2024",
      items: ["Start to run  factory in Binh Duong province"],
    },
    {
      year: "2023",
      items: ["Top selling product on retail "],
    },
    {
      year: "2022",
      items: [
        "Corporate establishment (FGW FARM Co., Ltd.)",
        "Start to run 2 factories in Tay Ninh province and Cu Chi, Ho Chi Minh city.",
      ],
    },
  ];

  return (
    <section className="flex justify-center py-12">
      <div className="container w-full max-w-4xl px-6">
        <div className="relative space-y-9">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-400"></div>

          {timelineData.map((yearData, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={yearData.year} className="relative">
                <div className="bg-primary absolute top-2 left-1/2 h-3 w-3 -translate-x-1/2 transform rounded-full"></div>

                <div className={`w-1/2 ${isEven ? "pr-8" : "ml-auto pl-8"}`}>
                  <div
                    className={`w-full ${isEven ? "text-right" : "text-left"}`}
                  >
                    <span className={`text-2xl font-bold text-gray-800`}>
                      {yearData.year}
                    </span>
                  </div>
                  {yearData.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-3">
                      <p
                        className={`text-sm leading-relaxed text-gray-700 ${isEven ? "text-right" : "text-left"}`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
