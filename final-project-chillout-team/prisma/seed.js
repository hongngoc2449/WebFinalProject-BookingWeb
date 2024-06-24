import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    const product1 = await prisma.products.create({
      data: {
        title: "Parker Dining Side Chair",
        description:
          "The Parker Dining Side Chair is a stylish and versatile piece designed to complement various dining room decors with its contemporary, streamlined silhouette. Crafted from sturdy wood or metal, the chair features a cushioned and upholstered seat and backrest, offering both comfort and support. Available in a range of finishes and upholstery options, it allows for easy customization to match personal preferences. Sized to fit standard dining tables, this chair also serves well in kitchens, home offices, or as an accent piece, providing a blend of elegance and functionality. Minimal assembly is typically required, ensuring a hassle-free addition to any space.",
        short_description: "Elegant, Comfortable, Stylish",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200287A1792_lifestyle?$rl_enh_1x1_zoom$",
        price: 10022,
      },
    });

    await prisma.productImage.createMany({
      data: [
        { productId: product1.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200402A2310_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product1.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200402A2310_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product1.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200402A2310_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product1.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200402A2310_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product1.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200402A2310_alternate5?$rl_enh_1x1_zoom$" }
      ]
    });

    const product2 = await prisma.products.create({
      data: {
        title: "Carthage Table Lamp",
        description:
          "The Barton Desk Lamp is a sleek and modern lighting solution designed to enhance productivity and style in any workspace.",
        short_description: "Modern, Sleek, Ambient",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1360415_lifestyle?$rl_enh_1x1_zoom$",
        price: 20330,
      },
    });

    await prisma.productImage.createMany({
      data: [
        { productId: product2.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60201336A4184_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product2.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60201336A4184_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product2.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60201336A4184_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product2.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60201336a4184_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product2.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60201336A4184_lifestyle?$rl_enh_1x1_zoom$" },
      ]
    });


    const product3 = await prisma.products.create({
      data: {
        title: "Barton Desk Lamp",
        description:
          "The Barton Desk Lamp is a sleek and modern lighting solution designed to enhance productivity and style in any workspace. Its design often features a streamlined, minimalist silhouette with clean lines, making it a perfect fit for contemporary or transitional decor. The lamp is typically crafted from durable materials such as metal or high-quality plastic, ensuring longevity and stability.",
        short_description: "Functional, Adjustable, Contemporary",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1359301_lifestyle?$rl_enh_1x1_zoom$",
        price: 22850,
      },
    });

    await prisma.productImage.createMany({
      data: [
        { productId: product3.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200296A1830_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product3.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200296A1830_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product3.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200296A1830_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product3.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200296A1830_alternate5?$rl_enh_1x1_zoom$" },
        { productId: product3.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200296A1830_alternate6?$rl_enh_1x1_zoom$" },
      ]
    });

    const product4 = await prisma.products.create({
      data: {
        title: "Guéridon Accent Table",
        description:
          "The Guéridon Accent Table is a stylish and versatile piece of furniture that adds a touch of elegance to any room. Originating from French design, the Guéridon table is characterized by its small, round tabletop, supported by a central pedestal or three legs. This design often includes intricate detailing, such as carved wood or metalwork, and is available in a variety of materials like marble, glass, wood, or metal.",
        short_description: "Versatile, Chic, Durable",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_lifestyle?$rl_enh_1x1_zoom$",
        price: 22340,
      },
    });

    await prisma.productImage.createMany({
      data: [
        { productId: product4.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1031823_alternate1?$rl_1x1_zoom$" },
        { productId: product4.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1031823_alternate2?$rl_1x1_zoom$" },
        { productId: product4.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_alternate10?$rl_enh_1x1_dskt$" },
        { productId: product4.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1031823_alternate2?$rl_1x1_zoom$" },
        { productId: product4.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1031823_alternate1?$rl_1x1_zoom$" },
      ]
    });

    const product5 = await prisma.products.create({
      data: {
        title: "RL-CJ Lounge Chair",
        description:
          "The RL-CJ Lounge Chair is a modern and comfortable seating option designed to elevate any living space with its contemporary style and ergonomic features. This lounge chair typically showcases a sleek, streamlined design with clean lines, making it suitable for various decor styles, from minimalist to mid-century modern.",
        short_description: "Luxurious, Cozy, Inviting",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200304A1736_lifestyle?$rl_enh_1x1_zoom$",
        price: 26274,
      },
    });

    await prisma.productImage.createMany({
      data: [
        { productId: product5.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI60200402A015_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product5.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI60200402A015_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product5.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI60200402A015_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product5.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI60200402A015_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product5.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI60200402A015_alternate8?$rl_enh_1x1_zoom$" },
      ]
    });

    const product6 = await prisma.products.create({
      data: {
        title: "Sophisticated, Sturdy, Classic",
        description:
          "The RL-CJ Lounge Chair epitomizes a sophisticated blend of classic design and modern functionality, making it a standout piece in any living space. Crafted with a sturdy frame, often from premium wood or metal, it ensures durability and long-lasting use. The chair's classic lines and elegant silhouette evoke timeless style, while its high-density foam padding and high-quality leather or fabric upholstery offer exceptional comfort. Perfect for living rooms, reading nooks, or home offices, the RL-CJ Lounge Chair combines sophistication, sturdiness, and a classic aesthetic, making it a versatile and elegant addition to any decor.",
        short_description: "Compact, Versatile, Modern",

        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028446050013_lifestyle?$rl_enh_1x1_zoom$",
        price: 78600,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product6.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200745A3194_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product6.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200745A3194_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product6.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200745A3194_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product6.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200745A3194_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product6.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200745A3194_lifestyle?$rl_enh_1x1_zoom$" },
      ]
    });

    const product7 = await prisma.products.create({
      data: {
        title: "Somerville Chair",
        description:
          "The Somerville Chair is a refined and versatile piece of furniture that effortlessly blends sophistication, sturdiness, and classic design elements. This chair typically features a robust wooden frame, often crafted from high-quality materials such as oak or walnut, ensuring durability and longevity. The design of the Somerville Chair is marked by its timeless elegance, with gracefully curved armrests, a high backrest, and tapered legs that add a touch of traditional charm.",
        short_description: "Comfortable, Modern, Durable",

        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200317A1624_alternate1?$rl_enh_1x1_zoom$",
        price: 98200,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product7.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200261A2214_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product7.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200261A2214_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product7.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200261A2214_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product7.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200261A2214_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product7.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200261A2214_alternate7?$rl_enh_1x1_zoom$" },
      ]
    });

    const product8 = await prisma.products.create({
      data: {
        title: "Beekman Cocktail Table",
        description:
          "The Beekman Cocktail Table is a sophisticated and elegant centerpiece for any living room, blending classic design with modern functionality. Typically crafted from high-quality materials such as solid wood, metal, or a combination of both, the Beekman Cocktail Table ensures durability and sturdiness. Its design often features a refined and timeless aesthetic, with clean lines, a smooth surface, and sometimes intricate detailing such as carved edges or decorative inlays.",
        short_description: "Stylish, Practical, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_lifestyle?$rl_enh_1x1_zoom$",
        price: 13250,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product8.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product8.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product8.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product8.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_alternate5?$rl_enh_1x1_zoom$" },
        { productId: product8.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_alternate6?$rl_enh_1x1_zoom$" },
      ]
    });

    const product9 = await prisma.products.create({
      data: {
        title: "Bohemian Bedside Table",
        description:
          "The Bohemian Bedside Table embodies an eclectic and artistic flair, perfect for adding personality to any bedroom setting. Crafted with a mix of natural materials like wood, rattan, or metal, this table showcases intricate detailing such as hand-carved accents, distressed finishes, or vibrant colors that reflect its bohemian roots. It often features practical storage solutions like drawers or shelves, offering functionality alongside its distinctive design. Whether adorned with woven patterns, mosaic tiles, or unique hardware, the Bohemian Bedside Table effortlessly blends into various decor styles, from rustic and vintage to contemporary boho-chic, serving as a focal point that enhances the room's ambiance with its whimsical charm and cultural richness.",
        short_description: "Artistic, Unique, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397840170_lifestyle?$rl_enh_1x1_zoom$",
        price: 92400,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product9.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200345A1875_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product9.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200345A1875_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product9.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200345A1875_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product9.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200345A1875_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product9.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_alternate6?$rl_enh_1x1_zoom$" },
      ]
    });

    const product10 = await prisma.products.create({
      data: {
        title: "Shotwell Dresser",
        description:
          "The Shotwell Dresser is a stylish and functional piece of furniture designed to enhance storage and organization in any bedroom. Typically crafted from high-quality wood such as oak, walnut, or pine, the Shotwell Dresser boasts a sturdy construction that ensures durability. Its design often features clean lines and a timeless silhouette, complemented by sleek hardware or minimalist accents for a modern touch. The dresser provides ample storage with multiple drawers of varying sizes, perfect for neatly organizing clothing, accessories, and personal items. Finished in rich stains or natural wood tones, the Shotwell Dresser seamlessly integrates into various decor styles, from contemporary to traditional, adding both elegance and practicality to the bedroom environment.",
        short_description: "Compact, Versatile, Modern",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_lifestyle?$rl_enh_1x1_zoom$",
        price: 41200,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product10.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product10.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product10.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product10.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product10.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_alternate5?$rl_enh_1x1_zoom$" },
      ]
    });

    const product11 = await prisma.products.create({
      data: {
        title: "Nesting End Tables",
        description:
          "Nesting end tables are versatile and practical furniture pieces that offer both style and functionality in modern living spaces. Typically designed as a set of two or more tables, nesting end tables feature varying sizes that fit neatly together, allowing them to be stacked or nested when not in use, thus saving space. Crafted from a variety of materials such as wood, metal, glass, or acrylic, these tables often showcase sleek and minimalist designs that blend seamlessly into contemporary decor. They are ideal for serving as side tables next to sofas or armchairs, providing convenient surfaces for lamps, books, or decorative items. Nesting end tables offer flexibility in placement, allowing them to be used together as a cohesive unit or separately throughout the room as needed. Their stylish appearance and practicality make nesting end tables a popular choice for enhancing both the aesthetic appeal and functionality of living areas.",
        short_description: "Chic, Functional, Sturdy",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445990059_lifestyle?$rl_enh_1x1_zoom$",
        price: 71200,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product11.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200330A2471_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product11.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200330A2471_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product11.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200330A2471_alternate5?$rl_enh_1x1_zoom$" },
        { productId: product11.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200330A2471_alternate6?$rl_enh_1x1_zoom$" },
        { productId: product11.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200330A2471_alternate7?$rl_enh_1x1_zoom$" },
      ]
    });

    const product12 = await prisma.products.create({
      data: {
        title: "Dalton Accent Table",
        description:
          "The Dalton Accent Table is a stylish and versatile piece of furniture designed to add a touch of sophistication to any room. Typically crafted from high-quality materials such as wood, metal, or a combination of both, the Dalton Accent Table features a sturdy construction that ensures durability and longevity. Its design often includes elegant details such as turned legs, intricate carvings, or a polished finish that enhances its aesthetic appeal. The tabletop is spacious enough to hold decorative items, drinks, or books, making it a practical addition to living rooms, bedrooms, or entryways. The Dalton Accent Table's timeless charm and functional design make it a versatile choice for complementing various decor styles, from traditional to transitional or even modern interiors.",
        short_description: "Mobile, Stylish, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445950111_lifestyle?$rl_enh_1x1_zoom$",
        price: 61220,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product12.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product12.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product12.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product12.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_alternate5?$rl_enh_1x1_zoom$" },
        { productId: product12.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_alternate6?$rl_enh_1x1_zoom$" },
      ]
    });

    const product13 = await prisma.products.create({
      data: {
        title: "Duke Bar Cart",
        description:
          "The Duke Bar Cart is a stylish and functional piece of furniture designed to elevate any entertaining space with its sophisticated design and practical features. Typically constructed from sturdy materials like metal or wood, the Duke Bar Cart showcases a sleek and streamlined silhouette, often with clean lines and a polished finish that adds a touch of elegance to any room.",
        short_description: "Modern, Sleek, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028399794176_lifestyle?$rl_enh_1x1_zoom$",
        price: 21300,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product13.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product13.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product13.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product13.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product13.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_alternate5?$rl_enh_1x1_zoom$" },
      ]
    });

    const product14 = await prisma.products.create({
      data: {
        title: "Duke Cocktail Table",
        description:
          "The Duke Cocktail Table is a sophisticated and versatile piece of furniture designed to serve as a centerpiece in any living space. Typically crafted from high-quality materials such as wood, metal, or a combination of both, the Duke Cocktail Table features a sturdy construction that ensures durability and longevity. Its design often includes a spacious tabletop, perfect for displaying decorative items, serving drinks, or holding books and magazines.",
        short_description: "Classic, Sturdy, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397964181_lifestyle?$rl_enh_1x1_zoom$",
        price: 33200,
      },
    });

    await prisma.products.create({
      data: {
        title: "Aldrich End Table",
        description:
          "The Aldrich End Table is a refined and versatile piece of furniture designed to add functionality and style to any living space. Typically crafted from high-quality materials such as wood, metal, or a blend of both, the Aldrich End Table features a sturdy construction that ensures durability and longevity. Its design often includes a compact square or rectangular tabletop, providing a convenient surface for placing lamps, decorative accents, or personal items like books and beverages.",
        short_description: "Comfortable, Luxurious, Inviting",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028399660152_lifestyle?$rl_enh_1x1_zoom$",
        price: 76600,
      },
    });

    const product15 = await prisma.products.create({
      data: {
        title: "Addison Club Chair",
        description:
          "The Addison Club Chair is a luxurious and inviting piece of furniture designed to provide both comfort and elegance to any living space. Typically crafted from high-quality materials such as leather or fabric upholstery, the Addison Club Chair features a plush and generously cushioned seat, backrest, and armrests, ensuring exceptional comfort and support. Its design often incorporates classic elements such as rolled arms, a deep seat, and sturdy wooden legs, which contribute to its timeless appeal and durability.",
        short_description: "Artistic, Unique, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200252A2371_lifestyle?$rl_enh_1x1_zoom$",
        price: 43000,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product15.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398300011_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product15.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398300011_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product15.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398300011_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product15.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398300011_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product15.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398300011_alternate10?$rl_enh_1x1_zoom$" },
      ]
    });

    const product16 = await prisma.products.create({
      data: {
        title: "Desert Modern Upholstered Bed",
        description:
          "Inspired by the rustic spirit of the American West, Ralph Lauren’s Desert Modern collection highlights the beauty of natural materials with a luxurious point of view. Featuring a modern slab headboard and footboard, this bed’s tailored profile is crafted from solid wood with generous padding and hand-done upholstery.",
        short_description: "Classic, Sturdy, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200355A2020_lifestyle?$rl_enh_1x1_zoom$",
        price: 33200,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product16.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200355A2020_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product16.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200355A2020_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product16.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200355A2020_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product16.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200355A2020_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product16.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200355A2020_alternate5?$rl_enh_1x1_zoom$" },
      ]
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();