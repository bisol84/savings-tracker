import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.formData();
    const result = await prisma.account.create({
      data: {
        name: data.get("name") as string,
        symbol: data.get("symbol") as string,
        number: Number(data.get("number")),
        initialBalance: Number(data.get("initial_balance")),
        type: data.get("type") as string,
        createdAt: new Date(),
        status: true,
      },
    });
    console.log(result);

    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'insertion." },
      { status: 500 }
    );
  }
}
