import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import dayjs from "dayjs";
dayjs.locale("fr");

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.account.findMany({
    orderBy: [
      {
        name: "asc",
      },
    ],
  });

  const labels = result.map((account) => account.name);
  const types = result.map((account) => account.type);
  const data = result.map((account) => account.actualBalance);

  const datasets = types.map((type) => {
    const data = result
      .filter((account) => account.type === type)
      .map((account) => account.actualBalance);

    return {
      label: type,
      data: data,
    };
  });

  const formattedData = {
    labels: labels,
    datasets: datasets,
  };

  console.log(formattedData);

  return NextResponse.json(formattedData);
}
