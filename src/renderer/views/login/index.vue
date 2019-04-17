<template>
  <div class="login">
    <div class="login-content">
      <img class="login-bg" src="../../assets/img/login_bg_1.jpg">
      <img class="login-bg" src="../../assets/img/login_bg_1.png">
      <div class="login-box">
        <div class="login-box-title">账号登录</div>
        <div class="login-box-item">
          <input type="text" v-model="form.username" class="username" placeholder="用户名">
        </div>
        <div class="login-box-item">
          <input type="password" v-model="form.password" class="password" placeholder="密码">
        </div>
        <div class="input-error">{{inputError}}</div>
        <el-button class="login-btn" type="primary" :loading="false" @click="Login">登录</el-button>
        <div class="login-info">
          <a class="fl" @click="toForgetFun">忘记密码</a>
          <a class="fr" @click="toRegisterFun">还无账号，立即注册</a>
        </div>
      </div>
      <div class="bg-white-bar"></div>
    </div>
  </div>
</template>

<script>
import { validatePwd, validatePhone } from "@/filters/index";
export default {
  name: "login",

  components: {},

  data() {
    return {
      form: {
        username: null,
        password: null
      },
      inputError: ""
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    Login() {
      if (!validatePhone(this.form.username)) {
        this.inputError = "请输入有效用户名";
        return false;
      }
      if (!validatePwd(this.form.password)) {
        this.inputError = "密码须包含6~12位大小写字母、数字";
        return false;
      }
      this.$router.push({ path: "/" });
      this.inputError = "";
      // login(this.form).then(response => {
      //   if (response) {
      //     this.$router.push({ path: "/" });
      //   }
      // });
    },
    // 前往 忘记密码
    toForgetFun() {
      this.$router.push({ path: "/forget" });
    },
    // 前往 注册
    toRegisterFun() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>

<style lang="scss" scope>
.login {
  height: calc(100% - 60px);
  background: #ffffff;
}
.wrap-login {
  background: #ffffff;
  height: 100%;
}
.login-content {
  min-width: 1170px;
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 560px;
  background: #0a0b6b;
  z-index: 0;
}
.bg-white-bar {
  height: 39px;
  background: #ffffff;
  width: 100%;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
}
.login-content .login-bg {
  width: 1920px;
  height: 560px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -960px;
  z-index: 0;
}
.login-box {
  width: 380px;
  padding: 45px 35px 80px;
  border: 1px solid #e6e6e6;
  background: #fff;
  position: inherit;
  z-index: 1;
  margin: auto;
  margin-top: 95px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.register-box {
  padding-bottom: 51px;
}
.login-box-title {
  font-size: 30px;
}
.login-box-title span {
  margin-right: 5px;
}
.login-box-title img {
  width: 18px;
  height: auto;
  vertical-align: text-top;
  margin-top: 4px;
  cursor: pointer;
}
.login-box-item {
  margin-top: 30px;
  position: relative;
  overflow: hidden;
}
.login-box-item input {
  font-size: 16px;
  border: none;
  padding: 10px 0px;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  line-height: 1.5;
}
.login-box-item .ver-code {
  position: absolute;
  bottom: 11px;
  right: 0px;
  background: #fff;
  z-index: 1;
  color: #2f81ff;
  font-size: 16px;
  cursor: pointer;
}
.login-info {
  overflow: hidden;
  margin-top: 24px;
  color: #2f81ff;
}
.login-info a {
  font-size: 16px;
  color: #2f81ff;
}
</style>
