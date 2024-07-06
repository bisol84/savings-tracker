"use client";

import useSWR from "swr";

const MonthlyChart = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    "/api/v1/dashboard/MonthlyChart",
    fetcher
  );

  if (!data) return <div>loading...</div>;

  return <div>d</div>;
};

export default MonthlyChart;
