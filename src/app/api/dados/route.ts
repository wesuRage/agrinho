import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function POST(request: Request) {
  try {
    const { planta } = await request.json();
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request: Request) {
  try {
    const { planta, umidade, temperatura, solo } = await request.json();
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
