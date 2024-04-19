import prisma from '@blog/services/prisma';

export async function GET(request: Request) {
  const posts = await prisma.post.findMany();

  return Response.json(posts);
}
