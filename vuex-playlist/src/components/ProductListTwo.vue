<template>
  <div id="product-list-two">
    <h2>product-list-two</h2>
    <ul>
      <li v-for="p in saleProducts(200)" :key="p.id">
        <span class="name">{{p.name}}</span>
        <span class="price">${{p.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'product-list-two',
  computed:{
    products(){
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
  },
  methods:{
    saleProducts(num){
      return this.$store.getters.saleProducts(num);
    },
    // reducePrice(amount){
    //   //mutations
    //   // this.$store.commit("reducePrice");
    //   //actions
    //   this.$store.dispatch("reducePrice",amount);
    // }
    ...mapActions([
      "reducePrice"
    ])
  }
}
</script>

<style scoped>
li{
  color: blue;
}
</style>
