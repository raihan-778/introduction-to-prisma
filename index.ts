import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);
  //   const postUser = await prisma.user.create({
  //     data: {
  //       email: "arif@gmail.com",
  //       name: "arif",
  //       age: 30,
  //     },
  //   });
  //   console.log(postUser);
}
main();
