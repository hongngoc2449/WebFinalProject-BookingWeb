const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Parker Dining Side Chair",
        description: "Elegant, Comfortable, Stylish",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200287A1792_lifestyle?$rl_enh_1x1_zoom$",
        price: 10022,
      },
    });

    await prisma.products.create({
      data: {
        title: "Carthage Table Lamp",
        description: "Modern, Sleek, Ambient",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1360415_lifestyle?$rl_enh_1x1_zoom$",
        price: 20330,
      },
    });

    await prisma.products.create({
      data: {
        title: "Barton Desk Lamp",
        description: "Functional, Adjustable, Contemporary",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1359301_lifestyle?$rl_enh_1x1_zoom$",
        price: 22850,
      },
    });

    await prisma.products.create({
      data: {
        title: "Guéridon Accent Table",
        description: "Versatile, Chic, Durable",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_lifestyle?$rl_enh_1x1_zoom$",
        price: 22340,
      },
    });

    await prisma.products.create({
      data: {
        title: "RL-CJ Lounge Chair",
        description: "Luxurious, Cozy, Inviting",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200304A1736_lifestyle?$rl_enh_1x1_zoom$",
        price: 26274,
      },
    });

    await prisma.products.create({
      data: {
        title: "Sophisticated, Sturdy, Classic",
        description: "This is product 6",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028446050013_lifestyle?$rl_enh_1x1_zoom$",
        price: 78600,
      },
    });

    await prisma.products.create({
      data: {
        title: "Somerville Chair",
        description: "Comfortable, Modern, Durable",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200317A1624_alternate1?$rl_enh_1x1_zoom$",
        price: 98200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Beekman Cocktail Table",
        description: "Stylish, Practical, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_lifestyle?$rl_enh_1x1_zoom$",
        price: 13250,
      },
    });

    await prisma.products.create({
      data: {
        title: "ohemian Bedside Table",
        description: "Artistic, Unique, Functional",
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
        title: "Aldrich End Table",
        description: "This is product 15",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028399660152_lifestyle?$rl_enh_1x1_zoom$",
        price: 76600,
      },
    });

    await prisma.products.create({
      data: {
        title: "Addison Club Chair",
        description: "This is product 16",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200252A2371_lifestyle?$rl_enh_1x1_zoom$",
        price: 43000,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
