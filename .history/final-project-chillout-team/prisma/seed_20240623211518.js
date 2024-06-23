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
          "The Barton Desk Lamp is a sleek and modern lighting solution designed to enhance productivity and style in any workspace.",
        short_description: "Modern, Sleek, Ambient",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1360415_lifestyle?$rl_enh_1x1_zoom$",
        price: 20330,
      },
    });

    await prisma.products.create({
      data: {
        title: "Barton Desk Lamp",
        description:
          "The Barton Desk Lamp is a sleek and modern lighting solution designed to enhance productivity and style in any workspace. Its design often features a streamlined, minimalist silhouette with clean lines, making it a perfect fit for contemporary or transitional decor. The lamp is typically crafted from durable materials such as metal or high-quality plastic, ensuring longevity and stability.",
        short_description: "Functional, Adjustable, Contemporary",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1359301_lifestyle?$rl_enh_1x1_zoom$",
        price: 22850,
      },
    });

    await prisma.products.create({
      data: {
        title: "Guéridon Accent Table",
        description:
          "The Guéridon Accent Table is a stylish and versatile piece of furniture that adds a touch of elegance to any room. Originating from French design, the Guéridon table is characterized by its small, round tabletop, supported by a central pedestal or three legs. This design often includes intricate detailing, such as carved wood or metalwork, and is available in a variety of materials like marble, glass, wood, or metal.",
        short_description: "Versatile, Chic, Durable",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_lifestyle?$rl_enh_1x1_zoom$",
        price: 22340,
      },
    });

    await prisma.products.create({
      data: {
        title: "RL-CJ Lounge Chair",
        description:
          "The RL-CJ Lounge Chair is a modern and comfortable seating option designed to elevate any living space with its contemporary style and ergonomic features. This lounge chair typically showcases a sleek, streamlined design with clean lines, making it suitable for various decor styles, from minimalist to mid-century modern.",
        short_description: "Luxurious, Cozy, Inviting",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200304A1736_lifestyle?$rl_enh_1x1_zoom$",
        price: 26274,
      },
    });

    await prisma.products.create({
      data: {
        title: "Sophisticated, Sturdy, Classic",
        description:
          "The RL-CJ Lounge Chair epitomizes a sophisticated blend of classic design and modern functionality, making it a standout piece in any living space. Crafted with a sturdy frame, often from premium wood or metal, it ensures durability and long-lasting use. The chair's classic lines and elegant silhouette evoke timeless style, while its high-density foam padding and high-quality leather or fabric upholstery offer exceptional comfort. Perfect for living rooms, reading nooks, or home offices, the RL-CJ Lounge Chair combines sophistication, sturdiness, and a classic aesthetic, making it a versatile and elegant addition to any decor.",
        short_description: "Compact, Versatile, Modern",

        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028446050013_lifestyle?$rl_enh_1x1_zoom$",
        price: 78600,
      },
    });

    await prisma.products.create({
      data: {
        title: "Somerville Chair",
        description:
          "The Somerville Chair is a refined and versatile piece of furniture that effortlessly blends sophistication, sturdiness, and classic design elements. This chair typically features a robust wooden frame, often crafted from high-quality materials such as oak or walnut, ensuring durability and longevity. The design of the Somerville Chair is marked by its timeless elegance, with gracefully curved armrests, a high backrest, and tapered legs that add a touch of traditional charm.",
        short_description: "Comfortable, Modern, Durable",

        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200317A1624_alternate1?$rl_enh_1x1_zoom$",
        price: 98200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Beekman Cocktail Table",
        description:
          "The Beekman Cocktail Table is a sophisticated and elegant centerpiece for any living room, blending classic design with modern functionality. Typically crafted from high-quality materials such as solid wood, metal, or a combination of both, the Beekman Cocktail Table ensures durability and sturdiness. Its design often features a refined and timeless aesthetic, with clean lines, a smooth surface, and sometimes intricate detailing such as carved edges or decorative inlays.",
        short_description: "Stylish, Practical, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_lifestyle?$rl_enh_1x1_zoom$",
        price: 13250,
      },
    });

    await prisma.products.create({
      data: {
        title: "Bohemian Bedside Table",
        description:
          "The Bohemian Bedside Table embodies an eclectic and artistic flair, perfect for adding personality to any bedroom setting. Crafted with a mix of natural materials like wood, rattan, or metal, this table showcases intricate detailing such as hand-carved accents, distressed finishes, or vibrant colors that reflect its bohemian roots. It often features practical storage solutions like drawers or shelves, offering functionality alongside its distinctive design. Whether adorned with woven patterns, mosaic tiles, or unique hardware, the Bohemian Bedside Table effortlessly blends into various decor styles, from rustic and vintage to contemporary boho-chic, serving as a focal point that enhances the room's ambiance with its whimsical charm and cultural richness.",
        short_description: "Artistic, Unique, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397840170_lifestyle?$rl_enh_1x1_zoom$",
        price: 92400,
      },
    });

    await prisma.products.create({
      data: {
        title: "Shotwell Dresser",
        description: "
The Shotwell Dresser is a stylish and functional piece of furniture designed to enhance storage and organization in any bedroom. Typically crafted from high-quality wood such as oak, walnut, or pine, the Shotwell Dresser boasts a sturdy construction that ensures durability. Its design often features clean lines and a timeless silhouette, complemented by sleek hardware or minimalist accents for a modern touch. The dresser provides ample storage with multiple drawers of varying sizes, perfect for neatly organizing clothing, accessories, and personal items. Finished in rich stains or natural wood tones, the Shotwell Dresser seamlessly integrates into various decor styles, from contemporary to traditional, adding both elegance and practicality to the bedroom environment.",
        short_description: "Compact, Versatile, Modern",

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
