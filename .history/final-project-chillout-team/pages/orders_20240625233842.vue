<template>
  <MainLayout>
    <div id="OrdersPage" class="mt-4 max-w-5xl mx-auto px-4 min-h-screen">
      <Card>
        <template #header>
          <div class="flex items-center text-2xl font-semibold">
            <i class="pi pi-shopping-cart mr-4" style="font-size: 2rem; color: #5fcb04"></i>
            Orders
          </div>
        </template>

        <Divider />

        <div v-if="orders && orders.length > 0">
          <DataTable :value="orders" responsiveLayout="scroll">
            <Column field="id" header="Order ID"></Column>
            <Column header="Items">
              <template #body="slotProps">
                <div v-for="item in slotProps.data.orderItem" :key="item.id" class="flex items-center gap-4 p-2">
                  <img width="60" class="rounded-lg" :src="item.product.url" alt="Product Image" />
                  <NuxtLink :to="`/item/${item.productId}`" class="hover:underline hover:text-blue-600">
                    <p class="text-lg text-gray-800">{{ item.product.title }}</p>
                  </NuxtLink>
                </div>
              </template>
            </Column>
            <Column header="Delivery Address">
              <template #body="slotProps">
                <div class="text-sm text-gray-600">
                  <p class="font-semibold">{{ slotProps.data.name }}</p>
                  <p>
                    {{ slotProps.data.address }}, {{ slotProps.data.zipcode }}, {{ slotProps.data.city }},
                    {{ slotProps.data.country }}
                  </p>
                </div>
              </template>
            </Column>
          </DataTable>
        </div>

        <div v-else class="flex items-center justify-center h-40">
          <p class="text-lg text-gray-500">You have no order history</p>
        </div>
      </Card>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const user = useSupabaseUser();

let orders = ref([]);

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
