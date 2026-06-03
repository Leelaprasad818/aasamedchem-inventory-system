import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      sku: body.sku,
      description: body.description,
      baseUnit: body.baseUnit,
      basePrice: body.basePrice,
      stockQuantity: body.stockQuantity,
    },
  });

  return NextResponse.json(product);
}