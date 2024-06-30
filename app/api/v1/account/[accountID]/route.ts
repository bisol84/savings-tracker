import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { accountID: string } }
) {
  const pAccountId = parseInt(params.accountID);
  const result = await prisma.account.findUnique({
    where: {
      id: pAccountId,
    },
  });

  return Response.json(result);
}
