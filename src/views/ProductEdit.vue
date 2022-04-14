<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      message: "Welcome to Edit Product",
      editProductParams: {
        new_images: []
      },
      editProductImages: [],
      newProductImages: '',
      suppliers: [],
      errors: []
    };
  },
  created: function () {
    this.showProduct();
    this.indexSuppliers();
  },
  methods: {
    showProduct: function () {
      axios.get(`/products/${this.$route.params.id}.json`)
        .then(response => {
          console.log(response.data);
          this.editProductParams = response.data;
          this.editProductImages = this.editProductParams.images;
        })
    },
    indexSuppliers: function () {
      axios.get('/suppliers.json')
        .then(response => {
          console.log(response.data);
          this.suppliers = response.data;
        })
    },
    updateProduct: function (product) {
      this.editProductParams.new_images = this.newProductImages.split(', ');
      axios.patch(`/products/${product.id}.json`, this.editProductParams)
        .then(response => {
          console.log(response.data);
          this.$router.push(`/products/${product.id}`)
        })
        .catch(errors => {
          this.errors = errors.response.data.errors;
        })
    }
  }
};
</script>

<template>
  <div class="products-edit">
    <h1>{{ message }}</h1>
    <p v-for="error in errors">{{ errors }}</p>
    <div> Images:<br>
      <img v-for="image in editProductImages" v-bind:src="image.url" style="max-width: 80%">
    </div>
    <div> Add Images:
      <input type="text" v-model="newProductImages" placeholder="image1.jpg, image2.jpg">
    </div>
    <div> Name:
      <input type="text" v-model="editProductParams.name">
    </div>
    <div> Description:
      <input type="text" v-model="editProductParams.description">
    </div>
    <div> Price:
      <input type="text" v-model="editProductParams.price">
    </div>
    <div> Supplier ID:
      <input type="text" v-model="editProductParams.supplier_id">
    </div>
    <div>
      <label for="suppliers">Supplier:</label>
      <select name="suppliers" id="suppliers" v-model="editProductParams.supplier_id">
        <option v-for="supplier in suppliers" v-bind:value="supplier.id">{{
          supplier.name
        }}</option>
      </select>
    </div>
    <button type="submit" v-on:click="updateProduct(editProductParams)">Submit</button>

  </div>
</template>

<style>
</style>