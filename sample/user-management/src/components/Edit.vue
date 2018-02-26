<template>
  <div class="edit container">
    <h1 class="page-header">编辑用户</h1>
    <form class="form-horizontal" v-on:submit="updateCustomer">
      <div class="form-group">
        <label for="inputName" class="col-sm-2 control-label">姓名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputName" placeholder="name" v-model="customer.name">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAge" class="col-sm-2 control-label">年龄</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputAge" placeholder="age" v-model="customer.age">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPhone" class="col-sm-2 control-label">电话</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPhone" placeholder="phone" v-model="customer.phone">
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail" class="col-sm-2 control-label">邮箱</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail" placeholder="email" v-model="customer.mail">
        </div>
      </div>
      <div class="form-group">
        <label for="inputCompany" class="col-sm-2 control-label">公司</label>
        <div class="col-sm-10">
          <select id="inputCompany" class="form-control" v-model="customer.companyId">
              <option value="1">苹果</option>
              <option value="2">微软</option>
              <option value="3">IBM</option>
            </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    updateCustomer(e) {
      e.preventDefault();
      if (!this.customer.name || !this.customer.age) {
        console.log("请添加必要的信息(name,age)");
      } else {
        let newCustomer = {
          name: this.customer.name,
          age: this.customer.age,
          email: this.customer.email,
          phone: this.customer.phone,
          companyId: this.customer.companyId
        };
        this.$http
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            newCustomer
          )
          .then(function(response) {
            console.log(response);
            this.$router.push({ path: "/", query: { alert: "更新成功" } });
          });
      }
    },
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(response) {
          this.customer = response.body;
        });
    }
  },
  created(){
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
