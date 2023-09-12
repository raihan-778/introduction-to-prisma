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
  const { sortBy, sortOrder, searchTerm, limit, page } = options;

  const limitNumber = parseInt(limit);
  const pageNumber = parseInt(page);
  const skip = limitNumber * pageNumber - limitNumber || 0;
  const take = limitNumber || 10;

  return prisma.$transaction(async (tx) => {
    //this is transaction & roll back method in prisma
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        category: true,
        author: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "asc" },
      where: {
        AND: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive", // here "insensitive" is used to avoid case sensitivity in search term.
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const total = await tx.post.count();
    return { data: result, total };
  });
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

const updatePost = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deletePost = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

const learnAggrigateAndGrouping = async () => {
  // const result = await prisma.post.aggregate({
  //   _avg: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  //   _count: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  //   _sum: {
  //     authorId: true,
  //   },
  // });
  // console.log(result);
  const result = await prisma.post.groupBy({
    by: ["categoryId"],
    _count: {
      categoryId: true,
    },
  });
  return result;
};

export const postService = {
  insertIntoDB,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggrigateAndGrouping,
};
