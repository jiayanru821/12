<template>
  <div class="main">
    <dl v-for="item in curList" :key="item.id" class="box">
      <dt>
        <img v-lazy="item.avatar" alt />
      </dt>
      <dd>
        <p>{{item.title}}</p>
        <p>单价：{{item.price}}</p>
        <p>
          <button @click="todetail(item.id)">详情</button>
          <button v-if="item.is_in_my_book">已收藏</button>
          <button @click="handleAdd(item)" v-else>收藏</button>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from "axios";
import Api from '../api'
export default {
  computed: {
    curList() {
      //let myBook = this.$store.state.myBook;
      let curList = this.$store.state.curList;
      // curList.forEach(item => {
      //   let curBook = myBook.find(book => book.id === item.id);
      //   if (curBook) {
      //     item.count = curBook.count;
      //   } else {
      //     item.count = 0;
      //   }
      // });
      return curList;
    }
  },
  methods: {
    todetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    handleAdd(item) {
      let myBook = this.$store.state.myBook;
      let index = myBook.findIndex(book => book.id === item.id);
      item.checked = true;
      item.count = 1;
      myBook.push(item);
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      // axios({
      //   url: "/api/add",
      //   data: {
      //     book: item
      //   },
      //   method: "post"
      // })
      Api.add({book:item}).then(res => {
        if (res.code === 200) {
          this.$store.dispatch({ type: "getList" });
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.box {
  height: 120px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
dt > img {
  width: 100px;
  padding: 10px;
}
dd {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
dd > p {
  flex: 1;
  text-align: center;
}
button {
  margin-left: 10px;
}
</style>