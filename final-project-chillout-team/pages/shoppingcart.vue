<template>
    <MainLayout>
        <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2"> 
            <div v-if="!products.length" class="h-[500px] flex items-center justify-center">
                <div class="pt-20 text-center">
                    <img
                        class="mx-auto"
                        width="250"
                        src="/cart-empty.png"
                        alt="Empty Cart"
                    >
                    <div class="text-xl mt-4">No items yet?</div>
                    <div v-if="!user" class="flex justify-center mt-4">
                        <NuxtLink 
                            to="/auth"
                            class="bg-red-500 w-full text-white text-xl font-semibold py-2 rounded-full hover:bg-red-600 transition duration-300"
                        >
                            Sign in
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4 shadow-sm">
                        <div class="text-2xl font-bold mb-2">
                            Shopping Cart ({{ products.length }})
                        </div>
                    </div>
                    <div class="bg-pink-100 rounded-lg p-4 mt-4">
                        <div class="text-red-500 font-bold">Welcome Deal applicable on 1 item only</div>
                    </div>
                    <div id="Items" class="bg-white rounded-lg p-4 mt-4 shadow-sm">
                        <div v-for="product in products" :key="product.id" class="mb-4">
                            <CartItem 
                                :product="product" 
                                :selectedArray="selectedArray"
                                @selectedRadio="selectedRadioFunc"
                            />
                        </div>
                    </div>
                </div>
                <div class="md:hidden block my-4"></div>
                <div class="md:w-[35%]">
                    <div id="Summary" class="bg-white rounded-lg p-4 shadow-sm">
                        <div class="text-2xl font-extrabold mb-2">Summary</div>
                        <div class="flex items-center justify-between my-4">
                            <div class="font-semibold">Total</div>
                            <div class="text-2xl font-semibold">
                                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
                            </div>
                        </div>
                        <button 
                            @click="goToCheckout"
                            class="checkout-button w-full bg-red-500 text-white text-lg font-semibold px-4 py-2 rounded-full mt-4 
                                    transition transform hover:shadow-2xl hover:scale-105 ease-in-out duration-300"
                        >
                            Checkout
                        </button>
                    </div>
                    <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4 shadow-sm">
                        <div class="text-lg font-semibold mb-2">Payment methods</div>
                        <div class="flex items-center justify-start gap-8 my-4">
                            <div v-for="card in cards" :key="card">
                                <img class="h-6" :src="card" alt="Payment Method">
                            </div>
                        </div>
                        <div class="border-b"></div>
                        <div class="text-lg font-semibold mb-2 mt-2">Buyer Protection</div>
                        <p class="my-2">
                            Get full refund if the item is not as described or if is not delivered
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import CartItem from '~/components/CartItem.vue';
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

let selectedArray = ref([])

onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 200)
})

const cards = ref([
    'visa.png',
    'mastercard.png',
    'paypal.png',
    'applepay.png',
])

const totalPriceComputed = computed(() => {
    let price = 0
    userStore.cart.forEach(prod => {
        price += prod.price
    })
    return (price / 100).toFixed(2)
})

const selectedRadioFunc = (e) => {
    const index = selectedArray.value.findIndex(item => item.id === e.id)
    if (index !== -1) {
        selectedArray.value.splice(index, 1)
    } else {
        selectedArray.value.push(e)
    }
}

const goToCheckout = () => {
    userStore.checkout = userStore.cart.filter(item => selectedArray.value.some(selected => selected.id === item.id))
    navigateTo('/checkout')
}

const products = ref([
    {
        id: 1,
        title: "Product 1",
        description: "This is product 1",
        url: "https://picsum.photos/id/1/800/800",
        price: 1002,
    },
    {
        id: 2,
        title: "Product 2",
        description: "This is product 2",
        url: "https://picsum.photos/id/2/800/800",
        price: 2030,
    },
    {
        id: 3,
        title: "Product 3",
        description: "This is product 3",
        url: "https://picsum.photos/id/3/800/800",
        price: 824,
    },
    {
        id: 4,
        title: "Product 4",
        description: "This is product 4",
        url: "https://picsum.photos/id/4/800/800",
        price: 223,
    }
])
</script>

<style scoped>
.checkout-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>