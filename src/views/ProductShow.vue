<script>import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Product Show",
      product: {}
    };
  },
  created: function () {
    this.showProduct();
  },
  methods: {
    showProduct: function () {
      axios.get(`/products/${this.$route.params.id}.json`)
        .then(response => {
          console.log(response.data);
          this.product = response.data;
        })
    },
    destroyProduct: function (product) {
      axios.delete(`/products/${product.id}.json`).
        then(response => {
          console.log(response.data);
          this.$router.push('/products')
        })
    },
    editProduct: function (product) {
      this.$router.push(`/products/${product.id}/edit`);
    }
  },
};
</script>

<template>
  <div class="products-show">
    <h1>{{ message }}</h1>
    <img v-for="image in product.images" v-bind:src="image.url" style="max-width: 85%">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Tax: ${{ product.tax }}</p>
    <p>Total: ${{ product.total }}</p>
    <button v-on:click="destroyProduct(product)">Delete Product</button>
    <button v-on:click="editProduct(product)">Edit Product</button>
  </div>
</template>

<style>
</style>