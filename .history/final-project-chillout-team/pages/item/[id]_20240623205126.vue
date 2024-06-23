<template>
  <MainLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[40%]">
          <img v-if="currentImage" class="rounded-lg object-fit" :src="currentImage" width="500" height="400" />

          <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
            <div v-for="image in images">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                width="80"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="md:w-[60%] bg-white p-4 rounded-lg shadow-md">
          <div v-if="product && product.data">
            <p class="text-lg font-semibold text-gray-800 mb-2">{{ product.data.title }}</p>
            <!-- <p class="text-sm text-gray-600 mb-2 leading-relaxed">{{ product.data.description }}</p> -->
          </div>

          <div class="flex items-center py-1">
            <span class="flex items-center justify-center w-4 h-4 rounded-full bg-yellow-400 mr-1">
              <Icon name="material-symbols:star-rounded" class="text-white" size="10" />
            </span>
            <p class="text-red-500 font-semibold text-xs">Extra 5% off</p>
          </div>

          <div class="flex items-center my-2">
            <Icon name="ic:baseline-star" color="#FF5353" size="16" />
            <Icon name="ic:baseline-star" color="#FF5353" size="16" />
            <Icon name="ic:baseline-star" color="#FF5353" size="16" />
            <Icon name="ic:baseline-star" color="#FF5353" size="16" />
            <Icon name="ic:baseline-star" color="#FF5353" size="16" />
            <span class="text-xs text-gray-600 font-light ml-1">5,213 Reviews · 1,000+ orders</span>
          </div>

          <div class="flex items-center my-2">
            <div class="text-lg font-bold text-gray-800">$ {{ priceComputed }}</div>
            <span
              class="bg-gray-100 border border-gray-300 text-orange-500 text-xs font-semibold px-1.5 py-1 rounded-sm ml-2"
              >70% off</span
            >
          </div>

          <p class="text-green-600 text-xs font-semibold my-1">Free 11-day delivery over ￡8.28</p>

          <p class="text-green-600 text-xs font-semibold my-1">Free Shipping</p>

          <p style="color: rgb(255, 255, 255)">This text is white too.</p>

          <button
            @click="addToCart()"
            :disabled="isInCart"
            class="mt-3 w-full px-5 py-2.5 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 transition-transform transform hover:scale-105 disabled:opacity-50"
          >
            <div v-if="isInCart">Is Added</div>
            <div v-else>Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const route = useRoute();

let product = ref(null);
let currentImage = ref(null);

onBeforeMount(async () => {
  product.value = await useFetch(`/api/prisma/get-product-by-id/${route.params.id}`);
});

watchEffect(() => {
  if (product.value && product.value.data) {
    currentImage.value = product.value.data.url;
    images.value[0] = product.value.data.url;
    userStore.isLoading = false;
  }
});

const isInCart = computed(() => {
  let res = false;
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true;
    }
  });
  return res;
});

const priceComputed = computed(() => {
  if (product.value && product.value.data) {
    return product.value.data.price / 100;
  }
  return "0.00";
});

const images = ref([
  "",
  "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_alternate2?$rl_enh_1x1_zoom$",
  "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_alternate3?$rl_enh_1x1_zoom$",
  "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210197_alternate4?$rl_enh_1x1_zoom$",
  "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210211_lifestyle?$rl_enh_1x1_zoom$",
  "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-6028398210211_alternate2?$rl_enh_1x1_zoom$",
]);

const addToCart = () => {
  userStore.cart.push(product.value.data);
};
</script>
