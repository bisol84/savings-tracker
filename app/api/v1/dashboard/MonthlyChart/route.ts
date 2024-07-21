import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { MonthlyData } from "@/types/accountInterfaces";
import dayjs from "dayjs";
import "dayjs/locale/fr";
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

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  /*const chartData = [
    { month: "January", compte01: 186, compte02: 80 },
    { month: "February", compte01: 305, compte02: 200 },
    { month: "March", compte01: 237, compte02: 120 },
    { month: "April", compte01: 73, compte02: 190 },
    { month: "May", compte01: 209, compte02: 130 },
    { month: "June", compte01: 214, compte02: 140 },
  ];*/

  const groupedData: { [key: string]: MonthlyData } = {};
  for (let i = 0; i < months.length; i++) {
    const month: string = months[i];

    result.map((account) => {
      const chartName = account.name.toLowerCase().replace(" ", "");

      if (!groupedData[month]) {
        groupedData[month] = { month: month };
      }
      if (1 == 1) {
        groupedData[month][chartName] = account.actualBalance;
      } else {
        groupedData[month][chartName] = 0;
      }
    });
  }

  const chartData = Object.values(groupedData);

  console.log(chartData);

  return NextResponse.json(chartData);
}
