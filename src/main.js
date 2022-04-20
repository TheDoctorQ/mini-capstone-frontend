import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueMultiselect from 'vue-multiselect';


axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://murmuring-springs-82484.herokuapp.com";

createApp(App).use(router).mount("#app");