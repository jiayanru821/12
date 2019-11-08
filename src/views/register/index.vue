<template>
  <div>
    <p>
      <input type="text" v-model="username" placeholder="请输入用户名" />
    </p>
    <p>
      <input type="password" v-model="pwd" placeholder="请输入密码" />
    </p>
    <button @click="handelRegister">注册</button>
  </div>
</template>

<script>
import Api from "../../api";
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {
    handelRegister() {
      if (this.username.trim() === "") {
        alert("用户名不能为空");
        return;
      }
      let checkResult=this.checkPwd(this.pwd.trim())
      if(checkResult!=='正确'){
          alert(checkResult)
          return
      }
      Api.register({
          username:this.username,
          pwd:this.pwd
      }).then(res=>{
          if(res.code===200){
              this.$router.push('/home')
          }else{
              alert(res.message)
          }
      })
    },
     
    checkPwd(pwd) {
      if (pwd.length < 6 || pwd.length > 30) {
        return "密码长度应该6-30位之间";
      }
      if (/^\d+$/.test(pwd)) {
        return "不能全是数字";
      }
      if (/^[a-z]+$/i.test(pwd)) {
        return "不能是全字母";
      }
      if (!/^[A-Za-z0-9]+$/.test(pwd)) {
        return "只能含有数字和字母，不能有其他字符";
      }
      return '正确'
    }
  }
};
</script>

<style>
</style>