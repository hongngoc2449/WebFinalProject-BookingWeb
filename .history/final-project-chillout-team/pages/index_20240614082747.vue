<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-4">
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent3 :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const products = [
  {
    id: 1,
    title: "Parker Dining Side Chair",
    description: "This is product 1",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200287A1792_lifestyle?$rl_enh_1x1_zoom$",
    price: 10022,
  },
  {
    id: 2,
    title: "Carthage Table Lamp",
    description: "This is product 2",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1360415_lifestyle?$rl_enh_1x1_zoom$",
    price: 20330,
  },
  {
    id: 3,
    title: "Barton Desk Lamp",
    description: "This is product 3",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1360415_lifestyle?$rl_enh_1x1_zoom$",
    price: 22850,
  },
  {
    id: 4,
    title: "Guéridon Accent Table",
    description: "This is product 4",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_lifestyle?$rl_enh_1x1_zoom$",
    price: 22340,
  },
  {
    id: 5,
    title: "RL-CJ Lounge Chair",
    description: "This is product 5",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200304A1736_lifestyle?$rl_enh_1x1_zoom$",
    price: 26274,
  },
  {
    id: 6,
    title: "Parker Hall Table",
    description: "This is product 6",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028446050013_lifestyle?$rl_enh_1x1_zoom$",
    price: 78600,
  },
  {
    id: 7,
    title: "Somerville Chair",
    description: "This is product 7",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200317A1624_alternate1?$rl_enh_1x1_zoom$",
    price: 98200,
  },
  {
    id: 8,
    title: "Beekman Cocktail Table",
    description: "This is product 8",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397950126_lifestyle?$rl_enh_1x1_zoom$",
    price: 13250,
  },
  {
    id: 9,
    title: "Bohemian Bedside Table",
    description: "This is product 9",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028397840170_lifestyle?$rl_enh_1x1_zoom$",
    price: 92400,
  },
  {
    id: 10,
    title: "Shotwell Dresser",
    description: "This is product 10",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-60200431A2480_lifestyle?$rl_enh_1x1_zoom$",
    price: 41220,
  },
  {
    id: 11,
    title: "Nesting End Tables",
    description: "This is product 11",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445990059_lifestyle?$rl_enh_1x1_zoom$",
    price: 71220,
  },
  {
    id: 12,
    title: "Dalton Accent Table",
    description: "This is product 12",
    url: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028445950111_lifestyle?$rl_enh_1x1_zoom$",
    price: 61220,
  },
];
</script>
