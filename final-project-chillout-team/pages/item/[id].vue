<template>
    <MainLayout>
        <div id = "ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%]">
                    <img
                    v-if="currentImage"
                        class="rounded-lg object-fit"
                        :src="currentImage"
                    >
                    <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                        <div v-for="image in images">
                            <img 
                                @mouseover="currentImage = image"
                                @click="currentImage = image"
                                width="70"
                                class="rounded-md object-fit border-[3px] cursor-pointer"
                                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                                :src="image"
                            >
                        </div>
                    </div>
                </div>

                <div class="md:w-[60%] bg-white p-6 rounded-lg shadow-md">

                <div>
                    <p class="text-xl font-semibold text-gray-800 mb-2">Laptop</p>
                    <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                        The [Brand Name] [Model Name] laptop features a 15.6-inch Full HD IPS display, powered by an Intel Core i7-1165G7 or AMD Ryzen 7 5800H processor, with integrated Intel Iris Xe or AMD Radeon graphics and optional NVIDIA GeForce GTX 1650/RTX 3060. It includes 16GB RAM (expandable to 32GB) and a 512GB/1TB SSD, running Windows 11 Home/Pro. The device boasts a sleek aluminum chassis, weighing 1.75 kg, and offers extensive connectivity options, including USB 3.2, USB-C, HDMI 2.0, Wi-Fi 6, and Bluetooth 5.1. Additional features are a backlit keyboard, precision touchpad, fingerprint reader, stereo speakers with Dolby Atmos, 720p HD webcam, and up to 10-hour battery life. Priced starting at $999, it comes with a 1-year warranty, extendable to 3 years.
                    </p>
                </div>

                <div class="flex items-center py-2">
                    <span class="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mr-2">
                        <Icon name="material-symbols:star-rounded" class="text-white" size="12"/>
                    </span>
                    <p class="text-red-500 font-semibold text-sm">Extra 5% off</p>
                </div>

                <div class="flex items-center my-2">
                    <Icon name="ic:baseline-star" color="#FF5353" size="20"/>
                    <Icon name="ic:baseline-star" color="#FF5353" size="20"/>
                    <Icon name="ic:baseline-star" color="#FF5353" size="20"/>
                    <Icon name="ic:baseline-star" color="#FF5353" size="20"/>
                    <Icon name="ic:baseline-star" color="#FF5353" size="20"/>
                    <span class="text-sm text-gray-600 font-light ml-2">5 213 Reviews · 1,000+ orders</span>
                </div>

                <div class="flex items-center my-2">
                    <div class="text-2xl font-bold text-gray-800">$ {{ priceComputed }}</div>
                    <span class="bg-gray-100 border border-gray-300 text-orange-500 text-xs font-semibold px-2 py-1 rounded-sm ml-3">70% off</span>
                </div>

                <p class="text-green-600 text-xs font-semibold my-1">
                    Free 11-day delivery over ￡8.28
                </p>

                <p class="text-green-600 text-xs font-semibold my-1">
                    Free Shipping
                </p>

                <p style="color: rgb(255, 255, 255);">This text is white too.</p>

                <button 
                    @click="addToCart()"
                    :disabled="isInCart"
                    class="
                        mt-4
                        w-full
                        px-6 
                        py-3 
                        rounded-lg 
                        text-white 
                        text-lg 
                        font-semibold 
                        bg-gradient-to-r 
                        from-orange-500 
                        to-yellow-500
                        transition-transform
                        transform
                        hover:scale-105
                        disabled:opacity-50
                    "
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
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

const route = useRoute()

let currentImage = ref(null)

onMounted(() =>{
    watchEffect(() => {
        currentImage.value = 'https://picsum.photos/id/1/800/800'
        images.value[0] = 'https://picsum.photos/id/1/800/800'
    })
})

const isInCart = computed(() =>{
    let res = false
    userStore.cart.forEach(prod =>{
        if (route.params.id == prod.id){
            res = true
        }
    })
    return res
})

const priceComputed = computed(() =>{
    return '26.40'
})

const images = ref([
    '',
    'https://picsum.photos/id/1/800/800',
    'https://picsum.photos/id/3/800/800',
    'https://picsum.photos/id/6/800/800',
    'https://picsum.photos/id/23/800/800',
    'https://picsum.photos/id/22/800/800',
])

const addToCart = () => {
    alert('ADDED')
}
</script>