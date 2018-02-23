<template>
  <div id="product-list-one">
    <h2>product-list-one</h2>
    <ul>
      <li v-for="p in saleProducts" :key="p.id">
        <span class="name">{{p.name}}</span>
        <span class="price">${{p.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-one',
  // props:["products"],
  // data () {
  //   return {
     
  //   }
  // }
  computed:{
    products(){
      return this.$store.state.products;
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  }
}
</script>

<style scoped>
li{
  color: red
}
</style>
