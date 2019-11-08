<template>
  <div>
    <div v-for="(item, index) in myBook" :key="item.id" class="box">
      <p><input type="checkbox" 
        :checked="item.checked" 
        @click="handelCheck(index,$event)"
        :id="item.id"
        ><label :for="item.id">{{item.title}}</label>,单价：{{item.price}}</p>
      <p>
        <button @click="delNum(index)">-</button>
        {{item.count}}
        <button @click="addNum(index)">+</button>
        <button @click="delbook(index)">删除</button>
      </p>
      
    </div>
    <div>
      <input type="checkbox" id="select" :checked="total.selectAll" @click="handSelectAll($event)">
      <label for="select">全选</label>
      <button @click="delAll">删除</button>
      <p>总价：{{total.totalPrice}}，总数：{{total.totalNum}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../api'
export default {
  computed: {
    myBook() {
      return this.$store.state.myBook;
    },
    total(){
      let myBook=this.myBook
      let totalNum=0,totalPrice=0
      myBook.filter(item=>item.checked).forEach(item=>{
        totalNum+=item.count,
        totalPrice+=item.count*item.price
      })
      let length=myBook.filter(item=>item.checked).length
      return {
        totalNum,
        totalPrice,
        // selectAll:length==myBook.length&&length>0
        selectAll:myBook.every(item=>item.checked)&&length>0
      }
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getMyBook" });
  },
  methods:{
    addNum(index){
      let myBook=this.myBook
      myBook[index].count++
      this.$store.commit({type:'setState',key:'myBook',value:myBook})
    },
    delNum(index){
      let myBook=this.myBook
      if(myBook[index].count>1){
        myBook[index].count--
      }
      this.$store.commit({type:'setState',key:'myBook',value:myBook})
    },
    delbook(index){
      let myBook=this.myBook
      myBook.splice(index,1)
      this.$store.commit({type:'setState',key:'myBook',value:myBook})
    },
    delAll(){
      let myBook=this.myBook
      this.$store.commit({type:'setState',key:'myBook',value:myBook.filter(item=>!item.checked)})
    },
    handelCheck(index,e){
      let myBook=this.myBook 
      myBook[index].checked=e.target.checked
      this.$store.commit({type:'setState',key:'myBook',value:myBook})
    },
    handSelectAll(e){
      let myBook=this.myBook
      myBook.forEach(item=>{
        item.checked=e.target.checked
      })
      this.$store.commit({type:'setState',key:'myBook',value:myBook})
    }
  },
  updated(){
    // axios({
    //   url:'/api/updata',
    //   data:{
    //     myBookNew:this.myBook
    //   },
    //   method:'post'
    // })
    Api.updata({myBookNew:this.myBook}).then(res=>{

    })
  }
};
</script>

<style lang='scss' scoped>
.box{
  height: 100px;
  line-height: 50px;
}
</style>