import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const url = new URL(process.env.DATABASE_URL!);

const adapter = new PrismaMariaDb({
    host: url.hostname,
    user: url.username,
    password: decodeURIComponent(url.password),
    database: url.pathname.slice(1),
    port: parseInt(url.port),
    connectionLimit: 5,
});

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
