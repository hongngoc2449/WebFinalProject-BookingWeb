<template>
  <div
    :id="`ProductComponent${product.id}`"
    class="bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] cursor-pointer"
  >
    <NuxtLink></NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const { product } = toRefs(props);
</script>
