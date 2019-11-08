import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:[],
    curId:0,
    curList:[],
    myBook:[]
  },
  mutations: {
    // setNav(state,payload){
    //   state.navList=payload.navList
    // },
    // setCurId(state,payload){
    //   state.curId=payload.curId
    // },
    // setList(state,payload){
    //   state.curList=payload.curList
    // },

    //key对应的state中的数据，value 对应的res获取的数据
    setState(state,payload){
      state[payload.key]=payload.value
    }
  },
  actions: {
    //导航
    getNav({commit}){
      // axios({
      //   url:'/getnav'
      // })
      Api.getNav().then(res=>{
        if(res.code===200){
          commit({type:'setState',key:'navList',value:res.data})
        }
      })
    },
    //列表
    getList({commit,state}){
      // axios({
      //   url:`/getlist?id=${state.curId}`
      // })
      Api.getList(`?id=${state.curId}`).then(res=>{
        if(res.code===200){
          commit({type:'setState',key:'curList',value:res.data})
        }
      })
    },
    //书包
    getMyBook({commit}){
      // axios({
      //   url:'/get/mybook'
      // })
      Api.getMyBook().then(res=>{
        if(res.code===200){
          commit({type:'setState',key:'myBook',value:res.data})
        }
      })
    }
  },
  modules: {
  }
})
