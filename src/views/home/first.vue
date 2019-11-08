<template>
  <div class="count">
    <Nav></Nav>
    <List></List>
  </div>
</template>

<script>
import Nav from "../../components/nav";
import List from '../../components/list'
export default {
  components: {
    Nav,
    List
  },
  mounted(){
    this.$store.dispatch({type:'getNav'})
    this.$store.dispatch({type:'getList'})
  }
};
</script>

<style lang='scss' scoped>
.count{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
