"use client";

import { Chart } from "@/components/chart";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { SpendingPie } from "./spending-pie";

export const DataCharts = () => {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className="grid grid-col-1 lg:grid-col-6 gap-8">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={data?.days} />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2">
        <SpendingPie data={data?.categories} />
      </div>
    </div>
  );
};
