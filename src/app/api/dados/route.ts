import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectToDatabase } from "@/helpers/connectToDatabase";

export async function POST(request: Request) {
  try {
    const { planta } = await request.json();

    await connectToDatabase();

    await prisma.safra.create({
      data: {
        planta,
        umidade: 0,
        temperatura: 0,
        solo: 0,
        automatico: true,
        regar: false,
      },
    });

    return NextResponse.json(
      { message: "Planta adicionada com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request: Request) {
  try {
    const { planta, umidade, temperatura, solo, automatico, regar } =
      await request.json();

    await connectToDatabase();

    await prisma.safra.update({
      where: {
        planta,
      },
      data: {
        planta,
        umidade,
        temperatura,
        solo,
        automatico,
        regar,
      },
    });

    return NextResponse.json(
      { message: "Planta atualizada com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    return NextResponse.json(await prisma.safra.findMany(), { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: Request) {
  try {
    const { planta } = await request.json();

    await connectToDatabase();

    await prisma.safra.delete({
      where: {
        planta,
      },
    });

    return NextResponse.json(
      { message: "Planta deletada com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
