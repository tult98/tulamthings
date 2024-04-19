import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type GlobalThisWithPrismaClient = typeof globalThis & {
  prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
};

const newGlobalThisWith = globalThis as GlobalThisWithPrismaClient;

const prisma = newGlobalThisWith.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production')
  newGlobalThisWith.prismaGlobal = prisma;
