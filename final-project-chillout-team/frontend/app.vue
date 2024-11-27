<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';  // Importing Axios directly

export default {
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products');  // Direct Axios call
      this.products = response.data;  // Store the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
};
</script>
