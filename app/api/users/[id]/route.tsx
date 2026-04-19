import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/lib/prisma";

const schema = z.object({
    name: z.string().min(1),
    email: z.email().optional(),
});

export async function GET(
    _request: NextRequest,
    {params}: {params: Promise<{id: string}>}){
        const { id } = await params;
        const user = await prisma.user.findUnique({
            where: {id: id}
        })
        if (!user)
            return NextResponse.json({error: "User not found"},{status:404})
        return NextResponse.json(user);
    }

export async function PUT(
    request: NextRequest,
    {params}: {params: Promise<{id: string}>}) {
        const body = await request.json();
        const validation = schema.safeParse(body);
        if (!validation.success)
            return NextResponse.json(validation.error.issues, {status: 400})

        const { id } = await params;
        const user = await prisma.user.findUnique({
            where: {id: id}
        })
        if (!user)
            return NextResponse.json({error: 'User not found'}, {status: 404})

        const updatedUser = await prisma.user.update({
            where: {id: user.id},
            data: {
                name: body.name,
                ...(body.email && { email: body.email }),
            }
        })

        return NextResponse.json(updatedUser)
    }

export async function DELETE(
    _request: NextRequest,
    {params}: {params: Promise<{id: string}>}
) {
    const { id } = await params;
    const user = await prisma.user.findUnique({
        where: {id: id}
    })
    if (!user)
        return NextResponse.json({error: "User not found"},{status:404})

    await prisma.user.delete({
        where: {id: user.id}
    })

    return NextResponse.json({});
}
