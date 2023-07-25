import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.user.create({
    data: {
      email: 'amitgal45@gmail.com',
      name: 'Amit Gal',
      id: 4,
    },
  });

  const post2 = await prisma.user.create({
    data: {
      email: 'amitgal452@gmail.com',
      name: 'Amit Gal',
      id: 5,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
