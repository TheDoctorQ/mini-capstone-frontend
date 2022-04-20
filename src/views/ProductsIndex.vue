<script>import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Products Index Page!",
      products: []
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get('/products.json')
        .then(response => {
          console.log(response.data);
          this.products = response.data;
        })
    }
  },
  // filterProducts: function () {
  //   return this.products.filter(product =>
  //     var lowerTitle = product.title.toLowerCase();
  //     var lowerSearchTerm = this.lowerSearchTerm.toLowerCase();
  //     return lowerTitle.includes(lowerSearchTerm);
  //     )
  // }
};
</script>

<template>
  <div class="products-index">
    <h1>{{ message }}</h1>
    <template>
      <div class="products-index">
        Search: <input type="text" v-model="lowerSearchTerm">
        <div v-for="product in products">
          <h1>{{ product.name }}</h1>
          {{ product.price }}
          <br />
          {{ product.description }}
          <br />
          <br />
          <hr />
        </div>
      </div>
    </template>

    <router-link to="/products/new">Add a New Product</router-link>
    <div v-for="product in products">
      <!-- <img v-bind:src="product.images[0].url" style="max-width: 85%"> -->
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <router-link v-bind:to="`/products/${product.id}`">More Info</router-link>
      <hr>
    </div>

  </div>
</template>

<style>
</style>