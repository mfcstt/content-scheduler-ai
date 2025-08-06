import { faker } from "@faker-js/faker";
import prisma from "./prisma";

async function main() {
  // Clear existing data
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.content.deleteMany({});
  // Create 20 users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 80 }),
      },
    });
    users.push(user);
  }

  // Create 60 posts
  for (let i = 0; i < 60; i++) {
    await prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs({ min: 1, max: 3 }),
        published: faker.datatype.boolean(),
        author_id: users[Math.floor(Math.random() * users.length)].id,
      },
    });
  }

  // Create 20 contents
  for (let i = 0; i < 20; i++) {
    await prisma.content.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        type: faker.helpers.arrayElement(["image", "video", "text", "audio"]),
        copy_ideas: faker.lorem.sentences({ min: 1, max: 2 }),
        hashtags: faker.lorem
          .words({ min: 2, max: 5 })
          .split(" ")
          .map((word) => `#${word}`)
          .join(" "),
        call_to_action: faker.lorem.sentence(),
        image_suggestions: faker.image.url(),
        content: faker.lorem.paragraphs({ min: 1, max: 2 }),
        chat_history: [
          { role: "user", message: faker.lorem.sentence() },
          { role: "assistant", message: faker.lorem.sentence() },
        ],
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
