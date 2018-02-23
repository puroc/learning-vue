<template>
  <div id="product-list-one">
    <h2>product-list-one</h2>
    <ul>
      <li v-for="p in saleProducts" :key="p.id">
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
  // props:["products"],
  // data () {
  //   return {
     
  //   }
  // }
  computed:{
    products(){
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      "saleProducts"
    ])
  },
  methods:{
    // reducePrice(amount){
    //   // this.$store.commit("reducePrice");
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
