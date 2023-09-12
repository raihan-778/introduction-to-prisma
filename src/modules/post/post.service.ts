import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      category: true,
      author: true,
    },
  });
  return result;
};
const getAllPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm } = options;
  const result = await prisma.post.findMany({
    include: {
      category: true,
      author: true,
    },
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : { createdAt: "desc" },
    where: {
      title: {
        contains: searchTerm,
      },
    },
  });
  return result;
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      author: true,
    },
  });
  return result;
};

export const postService = {
  insertIntoDB,
  getAllPosts,
  getSinglePost,
};
