<template>
  <div class="content">
    <div class="nav">
      <router-link to="/home/first" class="sp">首页</router-link>
      <router-link to="/home/book" class="sp">书包</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.nav {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #ccc;
  display: flex;
}
.sp {
  flex: 1;
  text-align: center;
}
.sp.router-link-active {
  color: rgb(255, 51, 0);
}
</style>