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
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
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
    <section className="mx-auto flex w-full max-w-10/12 items-center justify-center gap-6">
      <div className="w-[550px]">
        <Doughnut data={data} options={options} ref={chartRef} />
      </div>

      <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
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
            <CardContent className="flex gap-4 p-4">
              <div
                className="mt-1 h-4 w-4 rounded-full"
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
