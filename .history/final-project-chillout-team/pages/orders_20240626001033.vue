<template>
  <MainLayout>
    <v-container id="OrdersPage" class="mt-4">
      <v-card class="p-6 elevation-2">
        <v-card-title class="d-flex align-center">
          <v-icon color="green">mdi-truck-delivery</v-icon>
          <span class="ml-4 text-2xl font-semibold">Orders</span>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text v-if="orders && orders.length > 0">
          <v-data-table
            :items="orders"
            class="elevation-1 rounded-lg border"
            :headers="headers"
            item-value="id"
            item-key="id"
            show-select
            :items-per-page="5"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Order List</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-select
                  v-model="itemsPerPage"
                  :items="[5, 10, 15]"
                  label="Items per page"
                  hide-details
                  dense
                ></v-select>
              </v-toolbar>
            </template>

            <template v-slot:item.id="{ item }">
              <span class="font-medium">{{ item.id }}</span>
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

            <template v-slot:no-data>
              <v-alert type="info" border="left" color="info"> No orders found. </v-alert>
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
const itemsPerPage = ref(10);

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
