import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.account.findMany({
    orderBy: [
      {
        name: "asc",
      },
    ],
  });

  return NextResponse.json(result);
}
