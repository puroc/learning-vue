<template>
  <div id="product-list-two">
    <h2>product-list-two</h2>
    <ul>
      <li v-for="p in products" :key="p.id">
        <span class="name">{{p.name}}</span>
        <span class="price">${{p.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-two',
  // props:["products"],
  // data () {
  //   return {
     
  //   }
  // }
  computed:{
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style scoped>
li{
  color: blue;
}
</style>
