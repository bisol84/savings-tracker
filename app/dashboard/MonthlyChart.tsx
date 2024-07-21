"use client";

import useSWR from "swr";
import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const MonthlyChart = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: dataChart, error: dataChartError } = useSWR(
    "/api/v1/dashboard/MonthlyChart",
    fetcher
  );

  if (!dataChart) return <div>loading...</div>;

  const chartConfig = {} satisfies ChartConfig;
  dataChart.forEach((chart) => {
    chartConfig["t"] = {
      label: chart.month,
      color: "#909090",
    };
  });

  // const chartConfig = {
  //   compte01: {
  //     label: dataChartConfig[0].name,
  //     color: "#60a5fa",
  //   },
  // } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={dataChart}>
        <Bar dataKey="compte01" fill="var(--color-compte01)" radius={4} />
        <Bar dataKey="compte02" fill="var(--color-compte02)" radius={4} />
        <ChartLegend content={<ChartLegendContent />} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default MonthlyChart;
