import { PrismaClient } from '@prisma/client'
import dotenv from "dotenv";

dotenv.config();

let prisma: PrismaClient;
const initPrismaClient = (): void => {
  const DbConnectionURL = process.env.DATABASE_URL;
console.log(DbConnectionURL)
  // https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/instantiate-prisma-client/
  // Instantiates a single instance of PrismaClient to avoid creating too many connections
  prisma = new PrismaClient();
  //console.log(prisma)
};

const getPrismaClient = (): PrismaClient => {
  if (!prisma) {
    initPrismaClient();
  }

  return prisma;
};

export { getPrismaClient };
