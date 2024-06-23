import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Parker Dining Side Chair",
        description:
          "The Parker Dining Side Chair is a stylish and versatile piece designed to complement various dining room decors with its contemporary, streamlined silhouette. Crafted from sturdy wood or metal, the chair features a cushioned and upholstered seat and backrest, offering both comfort and support. Available in a range of finishes and upholstery options, it allows for easy customization to match personal preferences. Sized to fit standard dining tables, this chair also serves well in kitchens, home offices, or as an accent piece, providing a blend of elegance and functionality. Minimal assembly is typically required, ensuring a hassle-free addition to any space.",
        short_description: "Elegant, Comfortable, Stylish",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200287A1792_lifestyle?$rl_enh_1x1_zoom$",
        price: 10022,
      },
    });

    await prisma.products.create({
      data: {
        title: "Carthage Table Lamp",
        description:
          "The Carthage Table Lamp features a sophisticated design that combines classic and contemporary elements, making it a versatile addition to various interior styles. It typically has a sturdy base made from high-quality materials such as ceramic, metal, or glass, often with intricate detailing or a smooth, polished finish. The lamp's body may come in various shapes, including traditional urn-like forms, modern geometric patterns, or sleek cylindrical designs. Topped with a fabric or linen shade, the Carthage Table Lamp provides a warm and inviting glow, perfect for living rooms, bedrooms, or offices. Its dimensions are generally balanced, with a height that makes it suitable for use on side tables, nightstands, or desks. The lamp often includes user-friendly features like a convenient on/off switch, compatibility with various bulb types, and sometimes even adjustable brightness settings. Combining aesthetic appeal with practical lighting solutions, the Carthage Table Lamp is both a decorative and functional piece that can enhance any space",
        short_description: "Modern, Sleek, Ambient",
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
        description: "Compact, Versatile, Modern",
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
        title: "Bohemian Bedside Table",
        description: "Artistic, Unique, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397840170_lifestyle?$rl_enh_1x1_zoom$",
        price: 92400,
      },
    });

    await prisma.products.create({
      data: {
        title: "Shotwell Dresser",
        description: "Compact, Versatile, Modern",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_lifestyle?$rl_enh_1x1_zoom$",
        price: 41200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Nesting End Tables",
        description: "Chic, Functional, Sturdy",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445990059_lifestyle?$rl_enh_1x1_zoom$",
        price: 71200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Dalton Accent Table",
        description: "Mobile, Stylish, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445950111_lifestyle?$rl_enh_1x1_zoom$",
        price: 61220,
      },
    });

    await prisma.products.create({
      data: {
        title: "Duke Bar Cart",
        description: "Modern, Sleek, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028399794176_lifestyle?$rl_enh_1x1_zoom$",
        price: 21300,
      },
    });

    await prisma.products.create({
      data: {
        title: "Duke Cocktail Table",
        description: "Classic, Sturdy, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397964181_lifestyle?$rl_enh_1x1_zoom$",
        price: 33200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Aldrich End Table",
        description: "Comfortable, Luxurious, Inviting",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028399660152_lifestyle?$rl_enh_1x1_zoom$",
        price: 76600,
      },
    });

    await prisma.products.create({
      data: {
        title: "Addison Club Chair",
        description: "Artistic, Unique, Functional",
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
