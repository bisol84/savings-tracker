"use client";

import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

const MonthlyChart = () => {
  Chart.register(...registerables);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR("/api/v1/accounts", fetcher);

  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "Test 1",
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        }}
      />
    </div>
  );
};

export default MonthlyChart;
