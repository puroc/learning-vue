<template>
  <div class="customerDetails container">
    <h1 class="page-header">{{customer.name}}</h1>
    <ul class="list-group">
      <li class="list-group-item">姓名：{{customer.age}}</li>
      <li class="list-group-item">年龄：{{customer.phone}}</li>
      <li class="list-group-item">邮箱：{{customer.email}}</li>
      <li class="list-group-item">公司：{{customer.companyId}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'customerDetails',
    data() {
      return {
        customer: ""
      }
    },
    methods: {
      fetchCustomers(id) {
        this.$http.get("http://localhost:3000/users/" + id).then(function(response) {
          this.customer = response.body;
        })
      }
    },
    created() {
      this.fetchCustomers(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
