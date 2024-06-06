<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="products" v-for="product in products.data" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
/* create const products array where are fake data contain product object including keys: id, title, description, url, price: */
const products = [
  { id: 1, title: "Product 1", description: "This is product 1", url: "http://example.com/1", price: 100 },
  { id: 2, title: "Product 2", description: "This is product 2", url: "http://example.com/2", price: 200 },
  { id: 3, title: "Product 3", description: "This is product 3", url: "http://example.com/3", price: 300 },
  { id: 4, title: "Product 4", description: "This is product 4", url: "http://example.com/4", price: 400 },
  { id: 5, title: "Product 5", description: "This is product 5", url: "http://example.com/5", price: 500 },
  { id: 6, title: "Product 6", description: "This is product 6", url: "http://example.com/6", price: 600 },
  { id: 7, title: "Product 7", description: "This is product 7", url: "http://example.com/7", price: 700 },
  { id: 8, title: "Product 8", description: "This is product 8", url: "http://example.com/8", price: 800 },
  { id: 9, title: "Product 9", description: "This is product 9", url: "http://example.com/9", price: 900 },
  { id: 10, title: "Product 10", description: "This is product 10", url: "http://example.com/10", price: 1000 },
];
</script>
