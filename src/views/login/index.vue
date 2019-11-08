<template>
  <div>
    <p>
      <input type="text" v-model="username" placeholder="请输入用户名" ref="username" />
    </p>
    <p>
      <input type="password" v-model="pwd" placeholder="请输入密码" @keyup.enter="handleLogin()" />
    </p>
    <button @click="handleLogin">登录</button><router-link tag="button" to='/register'>注册</router-link>
  </div>
</template>

<script>
import axios from "axios";
import Api from "../../api";
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.username.trim() === "") {
        alert("用户不能为空");
        return;
      }
      if (this.pwd.trim() === "") {
        alert("密码不能为空");
        return;
      }
      // axios({
      //   url: "/api/login",
      //   data: {
      //     username: this.username,
      //     pwd: this.pwd
      //   },
      //   method: "post"
      // });
      Api.login({
        username: this.username,
        pwd: this.pwd
      }).then(res => {
        if (res.code === 200) {
          localStorage.setItem('username',this.username)
          this.$router.push("/home");
        } else {
          alert(res.message);
        }
      });
    }
  },
  mounted() {
    this.$refs.username.focus();
  }
};
</script>

<style lang='scss' scoped>
p {
  width: 100%;
  height: 50px;
}
p > input {
  width: 280px;
  height: 40px;
  padding: 5px;
}
button {
  width: 100px;
  height: 30px;
}
</style>