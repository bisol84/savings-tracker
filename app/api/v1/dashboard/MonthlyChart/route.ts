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

  return NextResponse.json(chartData);
}
