import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // state用来存储数据
    state: {
        products: [
            { name: "张三", price: 200 },
            { name: "李四", price: 100 },
            { name: "王五", price: 300 }
        ]
    },
    // getters用来获取数据
    getters: {
        saleProducts(state) {
            let result = state.products.map(
                product => {
                    return {
                        name: product.name,
                        price: product.price 
                    }
                }
            );
            return result;
        }
    },
    // mutations用来执行同步操作
    mutations: {
        reducePrice(state,payload) {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    // actions用来执行异步操作
    actions: {
        reducePrice(context, payload) {
            setTimeout(function () { context.commit("reducePrice", payload); }, 2000);

        }
    }
});