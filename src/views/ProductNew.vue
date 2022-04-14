<script>import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Create a New Product",
      newProductParams: {},
      newProductImages: '',
      errors: []
    };
  },
  created: function () { },
  methods: {
    createProduct: function () {
      this.newProductParams.images = this.newProductImages.split(', ')
      axios.post('/products.json', this.newProductParams)
        .then(response => {
          console.log(response.data),
            this.$router.push('/products')
        })
        .catch(errors => {
          this.errors = errors.response.data.errors;
        });
    }
  },
};
</script>

<template>
  <div class="products-new">
    <h1>{{ message }}</h1>
    <p v-for="error in errors">{{ errors }}</p>
    <div> Images:
      <input type="text" v-model="newProductImages" placeholder="image1.jpg, image2.jpg">
    </div>
    <div> Name:
      <input type="text" v-model="newProductParams.name">
    </div>
    <div> Description:
      <input type="text" v-model="newProductParams.description">
    </div>
    <div> Price:
      <input type="text" v-model="newProductParams.price">
    </div>
    <button type="submit" v-on:click="createProduct()">Submit</button>

  </div>
</template>

<style>
</style>