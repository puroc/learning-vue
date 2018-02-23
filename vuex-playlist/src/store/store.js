import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products:[
            {name:"张三",price:200},
            {name:"李四",price:100},
            {name:"王五",price:300}
        ]
    }
});