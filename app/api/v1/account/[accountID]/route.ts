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

export async function PUT(
  req: Request,
  { params }: { params: { accountID: string } }
) {
  try {
    const pAccountId = parseInt(params.accountID);
    const data = await req.json();

    const insertHistory = await prisma.accountHistory.create({
      data: {
        idAccount: data.id as number,
        updatedAt: new Date(),
        actualBalance: parseFloat(data.actualBalance) as number,
      },
    });

    const result = await prisma.account.update({
      where: {
        id: pAccountId,
      },
      data: {
        actualBalance: parseFloat(data.actualBalance) as number,
        updatedAt: new Date(),
      },
    });

    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de la mise à jour." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { accountID: string } }
) {
  const pAccountId = parseInt(params.accountID);
  const result = await prisma.account.delete({
    where: {
      id: pAccountId,
    },
  });

  return Response.json(result);
}
