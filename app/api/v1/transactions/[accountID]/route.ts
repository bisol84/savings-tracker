import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import dayjs from "dayjs";
dayjs.locale("fr");

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { accountID: string } }
) {
  const pAccountId = parseInt(params.accountID);
  const result = await prisma.transaction.findMany({
    where: {
      accountId: pAccountId,
    },
    orderBy: [
      {
        createdAt: "asc",
      },
    ],
  });

  const modifiedResult = result.map((account) => ({
    ...account,
    createdAt: dayjs(account.createdAt).format("DD MMMM YYYY"),
    updatedAt: dayjs(account.updatedAt).format("DD MMMM YYYY"),
  }));

  return NextResponse.json(modifiedResult);
}
