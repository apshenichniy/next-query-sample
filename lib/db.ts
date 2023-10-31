import { PrismaClient } from "@prisma/client";

const prismaClientInstance = () => {
  return new PrismaClient();
};

type PrismaClientInstance = ReturnType<typeof prismaClientInstance>;

const globalPrisma = globalThis as { prisma?: PrismaClientInstance };
const prisma = globalPrisma.prisma || prismaClientInstance();

if (process.env.NODE_ENV !== "production") {
  globalPrisma.prisma = prisma;
}

export const db = prisma;
