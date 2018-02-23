<template>
  <div id="product-list-one">
    <h2>product-list-one</h2>
    <ul>
      <li v-for="p in saleProducts(100)" :key="p.id">
        <span class="name">{{p.name}}</span>
        <span class="price">${{p.price}}</span>
      </li>
    </ul>
    <button class="btn btn-primary" @click="reducePrice(5)">商品降价</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
  name: 'product-list-one',
  computed:{
    products(){
      return this.$store.state.products;
    },
    // ...mapGetters([
    //   "saleProducts"
    // ])
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
  color: red
}
</style>
