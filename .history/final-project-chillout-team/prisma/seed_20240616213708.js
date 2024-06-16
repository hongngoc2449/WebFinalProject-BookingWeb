const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Parker Dining Side Chair",
        description: "This is product 1",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200287A1792_lifestyle?$rl_enh_1x1_zoom$",
        price: 10022,
      },
    });

    await prisma.products.create({
      data: {
        title: "Carthage Table Lamp",
        description: "This is product 2",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1360415_lifestyle?$rl_enh_1x1_zoom$",
        price: 20330,
      },
    });

    await prisma.products.create({
      data: {
        title: "Barton Desk Lamp",
        description: "This is product 3",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1359301_lifestyle?$rl_enh_1x1_zoom$",
        price: 22850,
      },
    });

    await prisma.products.create({
      data: {
        title: "Guéridon Accent Table",
        description: "This is product 4",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_lifestyle?$rl_enh_1x1_zoom$",
        price: 22340,
      },
    });

    await prisma.products.create({
      data: {
        title: "RL-CJ Lounge Chair",
        description: "This is product 5",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200304A1736_lifestyle?$rl_enh_1x1_zoom$",
        price: 26274,
      },
    });

    await prisma.products.create({
      data: {
        title: "Parker Hall Table",
        description: "This is product 6",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028446050013_lifestyle?$rl_enh_1x1_zoom$",
        price: 78600,
      },
    });

    await prisma.products.create({
      data: {
        title: "Somerville Chair",
        description: "This is product 7",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200317A1624_alternate1?$rl_enh_1x1_zoom$",
        price: 98200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Beekman Cocktail Table",
        description: "This is product 8",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_lifestyle?$rl_enh_1x1_zoom$",
        price: 13250,
      },
    });

    await prisma.products.create({
      data: {
        title: "ohemian Bedside Table",
        description: "This is product 9",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397840170_lifestyle?$rl_enh_1x1_zoom$",
        price: 92400,
      },
    });

    await prisma.products.create({
      data: {
        title: "Shotwell Dresser",
        description: "This is product 10",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_lifestyle?$rl_enh_1x1_zoom$",
        price: 41200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Nesting End Tables",
        description: "This is product 11",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445990059_lifestyle?$rl_enh_1x1_zoom$",
        price: 71200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Dalton Accent Table",
        description: "This is product 12",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445950111_lifestyle?$rl_enh_1x1_zoom$",
        price: 61220,
      },
    });

    await prisma.products.create({
      data: {
        title: "Duke Bar Cart",
        description: "This is product 13",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028399794176_lifestyle?$rl_enh_1x1_zoom$",
        price: 21300,
      },
    });

    await prisma.products.create({
      data: {
        title: "Duke Cocktail Table",
        description: "This is product 14",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397964181_lifestyle?$rl_enh_1x1_zoom$",
        price: 33200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Rasberries",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/102/800/800",
        price: 259,
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Car",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/111/800/800",
        price: 104959,
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Mini",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/119/800/800",
        price: 99999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Bench",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/129/800/800",
        price: 8999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Broken Cars",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/133/800/800",
        price: 256595,
      },
    });

    await prisma.products.create({
      data: {
        title: "Guitar",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/145/800/800",
        price: 12595,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
