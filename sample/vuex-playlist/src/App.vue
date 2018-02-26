<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <!-- <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two> -->
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne";
import ProductListTwo from "./components/ProductListTwo";
export default {
  name: "app",
  components: {
    "product-list-one":ProductListOne,
    "product-list-two":ProductListTwo,
  },
  data() {
    return {
      products:[
            {name:"张三",price:500},
            {name:"李四",price:200},
            {name:"王五",price:300}
        ]
    };
  }
};
</script>

<style>

</style>
