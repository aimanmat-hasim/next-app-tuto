import { NextRequest, NextResponse} from 'next/server';
import schema from './schema';
import prisma from '@/app/lib/prisma';

export async function GET() {
    const product = await prisma.product.findMany();

    return NextResponse.json(product);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.issues, {status: 400})

    const newProduct = await prisma.product.create({
        data:{
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct, {status: 201})
}
