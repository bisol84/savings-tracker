"use client";

import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

const MonthlyChart = () => {
  Chart.register(...registerables);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    "/api/v1/dashboard/MonthlyChart",
    fetcher
  );

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default MonthlyChart;
