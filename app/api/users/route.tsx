import {NextRequest, NextResponse} from "next/server";
import schema from "./schema";
import prisma from "@/app/lib/prisma";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.issues, {status: 400});

    const existingUser = await prisma.user.findUnique({
        where: {email: body.email}
    });
    if (existingUser)
        return NextResponse.json({error: 'User already exists'}, {status: 400});

    const newUser = await prisma.user.create({
        data: {name: body.name, email: body.email}
    });
    return NextResponse.json(newUser, {status: 201});
}
