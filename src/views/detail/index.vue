import axios from 'axios';
<template>
  <div>
    <img :src='detail.avatar' alt="">
    <p>
      <button v-if="detail.is_in_my_book">已收藏</button>
      <button v-else @click="handleAdd()">收藏</button>
    </p>
    <p>{{detail.summary}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../api'
export default {
  data(){
    return {
      detail:{}
    }
  },
  methods:{
    handleAdd(){
      let book=this.detail
      book.count=1
      // axios({
      //   url:'/api/add',
      //   data:{
      //     book
      //   },
      //   method:'post'
      // })
      Api.add({book}).then(res=>{
        if(res.code===200){
          this.detail.is_in_my_book=true
        }
      })
    }
  },
  //详情数据
  mounted(){
    let id=this.$route.params.id
    // axios({
    //   url:`/api/detail?id=${id}`
    // })
    Api.getDetail(`?id=${id}`).then(res=>{
      if(res.code===200){
        this.detail=res.data
      }
    })
  }
}
</script>

<style>

</style>