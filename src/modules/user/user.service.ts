import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
const createIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};
// const getUserFromDB = async (data: User): Promise<User> => {
//   const result = await prisma.user.findMany({});
//   return result;
// };

export const userService = {
  createIntoDB,
};
