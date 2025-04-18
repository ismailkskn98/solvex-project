"use client";
import React, { useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TokenDistribution({ tokenAllocations }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const chartRef = useRef();

  const data = {
    datasets: [
      {
        data: tokenAllocations.map((item) => item.percentage),
        backgroundColor: tokenAllocations.map((item) => item.color),
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    cutout: "1%",
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            const item = tokenAllocations[index];
            return `${item.name}: ${item.percentage}% (${item.amount.toLocaleString()})`;
          },
        },
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        setHoverIndex(chartElement[0].index);
      } else {
        setHoverIndex(null);
      }
    },
  };

  return (
    <section className="mx-auto flex w-full max-w-full flex-col items-center justify-center gap-12 lg:flex-row xl:max-w-11/12 2xl:max-w-10/12">
      <div className="order-2 w-[450px] lg:order-1">
        <Doughnut data={data} options={options} ref={chartRef} />
      </div>

      <div className="order-1 grid w-full grid-cols-1 gap-4 md:w-1/2 lg:order-2 xl:grid-cols-2">
        {tokenAllocations.map((item, index) => (
          <Card
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`transition-all ${
              hoverIndex === index
                ? "scale-[1.02] ring-2 ring-indigo-500 ring-offset-2"
                : ""
            }`}
          >
            <CardContent className="flex gap-3 p-2">
              <div
                className="mt-1 h-5 w-5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <CardTitle className="text-base font-semibold">
                  {item.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-medium">{item.percentage}%</span> —{" "}
                  {item.amount.toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
