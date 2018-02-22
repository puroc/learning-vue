import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import Details from '@/components/Details'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
