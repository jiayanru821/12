<template>
    <div class="nav">
      <span
        v-for="item in navList"
        :key="item.id"
        class="spa"
        :class="{active:curId===item.id}"
        @click="handleNav(item.id)"
      >{{item.title}}</span>
    </div>
</template>

<script>
export default {
  computed: {
    navList() {
      return this.$store.state.navList;
    },
    curId() {
      return this.$store.state.curId;
    }
  },
  methods: {
    handleNav(curId) {
      this.$store.commit({ type: "setState",key:'curId',value:curId });
      this.$store.dispatch({type:'getList'})
    }
  }
};
</script>

<style lang='scss' scoped>
.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #eee;
  display: flex;
}
.spa {
  flex: 1;
  text-align: center;
}
.active {
  color: rgb(216, 21, 21);
}
</style>