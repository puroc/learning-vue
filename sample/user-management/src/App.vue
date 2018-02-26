<template>
  <div id="app ">
      <nav class="navbar navbar-default container">
        <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt="" width="20" height="20"></a>
          </div>
  
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
            <ul class="nav navbar-nav">
              <li>
                <router-link to="/">主页</router-link>
              </li>
              <li>
                <router-link to="/about">关于</router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link to="/Add">添加用户</router-link>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </nav>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  
</style>
