import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    const product1 = await prisma.products.create({
      data: {
        title: "Hudson St. Lounge Chair",
        description:
          "With sleek contours and triple-band arms, Ralph Lauren’s Hudson St. lounge chair embodies American modernism. Crafted from polished stainless steel, the streamlined frame is balanced with a deep cushioned seat and reclined back.",
        short_description: "Elegant, Comfortable, Stylish",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200402A2310_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Duke Dresser",
        description:
          "The Duke dresser is inspired by 1930s-era styles and accented with polished stainless steel trim. The classic design features luxurious black glass panels at the top and has four drawers with soft-close glides.",
        short_description: "Modern, Sleek, Ambient",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60201336A4184_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Clivedon Carved Chair",
        description:
          "Ralph Lauren’s Clivedon chair showcases an exquisitely carved solid wood frame inspired by the ornate style of Louis XVI. It features an upholstered seat and back with exposed arms and is punctuated with gleaming nailhead trim.",
        short_description: "Functional, Adjustable, Contemporary",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200296A1830_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Gavin Tray Stand",
        description:
          "The Guéridon Accent Table is a stylish and versatile piece of furniture that adds a touch of elegance to any room. Originating from French design, the Guéridon table is characterized by its small, round tabletop, supported by a central pedestal or three legs. This design often includes intricate detailing, such as carved wood or metalwork, and is available in a variety of materials like marble, glass, wood, or metal.",
        short_description: "Versatile, Chic, Durable",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1031823_lifestyle?$rl_1x1_pdp$",
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
        title: "40th Anniversary Hudson St. Lounge Chair",
        description:
          "In celebration of the 40th anniversary of Ralph Lauren’s iconic Hudson St. Lounge Chair, this limited edition updates the original’s design with burnished leather—the same leather to upholster the cushioned seat and back—expertly hand-wrapped by our bespoke craftsmen in London over its triple-band steel frame. It’s finished with double topstitching and accented with a commemorative brass plaque at the crossbar.",
        short_description: "Luxurious, Cozy, Inviting",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI60200402A015_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Hayles Side Table",
        description:
          "Solid oak wood provides the foundation of the Hayles side table, which features a glass inset top framed in natural leather with expertly stitched seams. The cross-style base is embellished with a subtle step-down detail that grounds the appearance, allowing for a refined profile.",
        short_description: "Compact, Versatile, Modern",

        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200745A3194_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Aran Isles Chair",
        description:
          "Casual elegance defines the Aran Isles collection, which unites solid wood with supple aniline leather. The chair is classically styled with rolled arms, brass nail-head trim, and front-facing bun feet. Premium spring-down cushions provide the perfect balance of softness and structure to the deep, comfortable seat.",
        short_description: "Comfortable, Modern, Durable",

        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200261A2214_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Tourville Bed",
        description:
          "Beautiful contours of rich khaya wood outline the Tourville bed, which offers a modern interpretation of classic French design. Set upon decorative scroll feet, the elegant silhouette is expertly upholstered at the headboard, footboard, and rails.",
        short_description: "Stylish, Practical, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200292A1618_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Noble Estate Bench",
        description:
          "Embodying classic French elegance, the exquisitely contoured Noble Estate bench is finely crafted from solid wood with carved scrolls and cloven feet. Nailhead trim traces the graceful silhouette, uniting frame and upholstery.",
        short_description: "Artistic, Unique, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200345A1875_lifestyle?$rl_enh_1x1_zoom$",
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
          "This campaign-style dresser merges striking design and exquisite craftmanship, with hand-carved details and solid brass inlay complementing the rich mahogany grain. Set upon a decorative base, the four-drawer silhouette features hand-cast hardware and recessed pulls.",
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
        title: "Brook Street Tufted Sofa",
        description:
          "Inspired by the tailored luxury inherent to London’s Savile Row, Ralph Lauren’s Brook Street sofa is upholstered in natural English cowhide, affording a soft hand and refined appearance. Set upon turned beechwood legs with front-facing casters, the elegant profile showcases a tufted back, scrolling arms, and gleaming nail-head trim.",
        short_description: "Chic, Functional, Sturdy",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200330A2471_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Brook Street Desk",
        description:
          "Inspired by the tailored luxury inherent to London’s Savile Row, Ralph Lauren’s interpretation of the Napoleon III desk is crafted from solid mahogany wood with a hand-applied finish. Five slender drawers and two pull-out writing shelves are set beneath the elegant buffalo leather top, which features masterfully hand-tooled silver leafing.",
        short_description: "Mobile, Stylish, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398140189_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Beekman Cocktail Table",
        description:
          "The elegant silhouette of Ralph Lauren’s Beekman cocktail table is enhanced by artful hand-carved details, including an inset border motif and an intricate, lacelike apron. Set upon sculptural legs, the solid mahogany wood frame showcases a swirled grain with rich highs and lows throughout.",
        short_description: "Modern, Sleek, Functional",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_lifestyle?$rl_enh_1x1_zoom$",
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
        title: "Writer's Chair",
        description:
          "Emblematic of Ralph Lauren’s iconic and enduring style, this winged club chair is masterfully constructed with hand-done tufting, pleated roll arms, and decorative bun feet crafted from solid maple wood. Upholstered in supple English cowhide, the generous seat is trimmed in oversize brass nail-heads.",
        short_description: "Classic, Sturdy, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200391A2299_lifestyle?$rl_enh_1x1_zoom$",
        price: 33200,
      },
    });
    await prisma.productImage.createMany({
      data: [
        { productId: product14.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200391A2299_alternate1?$rl_enh_1x1_zoom$" },
        { productId: product14.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200391A2299_alternate2?$rl_enh_1x1_zoom$" },
        { productId: product14.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200391A2299_alternate3?$rl_enh_1x1_zoom$" },
        { productId: product14.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200391A2299_alternate4?$rl_enh_1x1_zoom$" },
        { productId: product14.id, url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200391A2299_alternate5?$rl_enh_1x1_zoom$" },
      ]
    });

    const product15 = await prisma.products.create({
      data: {
        title: "Heiress End Table",
        description:
          "Regency period elegance inspires the Heiress end table, constructed with a sculptural brass frame, intricate engraved scrolls, aviary medallions, and lion’s paw feet, which are expertly cast and finished by hand. It’s topped with polished Volakas marble and features a shelf at the midpoint.",
        short_description: "Classic, Sturdy, Elegant",
        url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398300011_lifestyle?$rl_enh_1x1_zoom$",
        price: 33200,
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