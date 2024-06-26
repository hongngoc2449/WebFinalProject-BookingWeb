<template>
  <MainLayout>
    <v-container id="OrdersPage" class="mt-4">
      <v-card class="p-6">
        <v-card-title>
          <v-icon color="green">mdi-truck-delivery</v-icon>
          <!-- <span class="ml-4 text-2xl font-semibold">Orders</span> -->
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text v-if="orders && orders.length > 0">
          <v-data-table :items="orders" class="elevation-1" :headers="headers" item-value="id" item-key="id">
            <template v-slot:item.id="{ item }">
              {{ item.id }}
            </template>
            <template v-slot:item.items="{ item }">
              <div v-for="orderItem in item.orderItem" :key="orderItem.id" class="flex items-center gap-4 py-2">
                <v-avatar>
                  <img :src="orderItem.product.url" alt="Product Image" />
                </v-avatar>
                <NuxtLink :to="`/item/${orderItem.productId}`" class="hover:underline hover:text-blue-600">
                  <span class="text-lg">{{ orderItem.product.title }}</span>
                </NuxtLink>
              </div>
            </template>
            <template v-slot:item.address="{ item }">
              <div class="text-sm text-gray-600">
                <p class="font-semibold">{{ item.name }}</p>
                <p>{{ item.address }}, {{ item.zipcode }}, {{ item.city }}, {{ item.country }}</p>
              </div>
            </template>
          </v-data-table>
        </v-card-text>

        <v-card-text v-else class="flex items-center justify-center h-40">
          <p class="text-lg text-gray-500">You have no order history</p>
        </v-card-text>
      </v-card>
    </v-container>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const user = useSupabaseUser();

let orders = ref([]);
const headers = [
  { text: "Order ID", value: "id" },
  { text: "Items", value: "items" },
  { text: "Delivery Address", value: "address" },
];

onBeforeMount(async () => {
  if (!user.value) {
    return navigateTo("/auth");
  }

  const { data } = await useFetch(`/api/prisma/get-all-orders-by-user/${user.value.id}`);
  if (data.value) {
    orders.value = data.value;
  }

  setTimeout(() => (userStore.isLoading = false), 200);
});
</script>

<style scoped>
#OrdersPage {
  background-color: #f9fafb;
}
</style>
