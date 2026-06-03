import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
  });

  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();

  const order = await prisma.order.create({
    data: {
      userId: body.userId,
      totalAmount: body.totalAmount,
    },
  });

  return NextResponse.json(order);
}