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
    <div v-for="product in products">
      {{ product.name }}
      <br />

      <br />
      {{ product.price }}
      <br />
      <br />
      {{ product.description }}
      <br />
      <router-link v-bind:to="`/products/${product.id}`">More Info</router-link>
      <p>{{ product.image }}</p>
      <img v-bind:src="product.image" />
      <hr />
    </div>
  </div>
</template>