<script>import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Products Index Page!",
      products: [],
    };
  },
  created: function () {
    this.productsIndex();
  },
  methods: {
    productsIndex: function () {
      console.log("products index...")
      axios.get('/products.json').then(response => {
        console.log(response.data);
        this.products = response.data;
      }
      )
    }
  },
};
</script>

<template>
  <div class="products-index">
    <h1>All Products</h1>
    <div v-for="product in products">
      <h2>{{ product.name }}</h2>
      {{ product.price }}
      <br />
      {{ product.description }}
      <br />
      <router-link v-bind:to="`/products/${product.id}`">More Info</router-link>
      <br />

      <br />

      <hr />
    </div>
  </div>
</template>