import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import WelcomeTemplate from '@/emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    to: z.email(),
    name: z.string().min(1),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 });

    const { to, name } = validation.data;
    const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to,
        subject: 'Welcome!',
        react: <WelcomeTemplate name={name} />,
    });

    if (error)
        return NextResponse.json(error, { status: 500 });

    return NextResponse.json(data);
}
