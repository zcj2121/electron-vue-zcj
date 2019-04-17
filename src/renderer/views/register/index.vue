<template>
  <div class="register">
    <div class="login-content">
      <img class="login-bg" src="../../assets/img/login_bg_1.jpg">
      <img class="login-bg" src="../../assets/img/login_bg_1.png">
      <div class="login-box register-box">
        <div class="login-box-title">
          <span>注册</span>
          <el-popover
            ref="popoverReg"
            placement="right"
            title
            width="220"
            trigger="hover"
            content="商户需通过和质量化入网审核,才可通过注册。"
          >
            <img src="../../assets/img/problem.png" slot="reference" alt>
          </el-popover>
        </div>
        <div class="login-box-item">
          <input type="text" v-model="form.phone" class="username" placeholder="请输入手机号">
        </div>
        <div class="login-box-item">
          <input
            type="password"
            v-model="form.password"
            class="password"
            placeholder="请设置密码,6~12位,包含大小写字母、数字"
          >
        </div>
        <div class="login-box-item">
          <input type="number" v-model="form.code" class="code" placeholder="请输入短信验证码">
          <a class="ver-code" @click="verCodeFun">{{verCodeName}}</a>
        </div>
        <div class="input-error">{{inputError}}</div>
        <el-button class="register-btn" type="primary" :loading="false" @click="formSaveFun">注册</el-button>
      </div>
      <div class="bg-white-bar"></div>
    </div>
  </div>
</template>

<script>
import { validatePwd, validatePhone, validateSixCode } from "@/filters/index";
export default {
  name: "register",

  components: {},

  data() {
    return {
      form: {
        phone: null,
        password: null,
        code: null
      },
      validCode: true,
      verCodeName: "获取验证码",
      inputError: ""
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},
  beforeDestroy() {
    clearInterval(this._inter);
  },
  methods: {
    formSaveFun() {
      if (!validatePhone(this.form.phone)) {
        this.inputError = "请输入有效手机号码";
        return false;
      }
      if (!validatePwd(this.form.password)) {
        this.inputError = "密码须包含6~12位大小写字母、数字";
        return false;
      }
      if (!validateSixCode(this.form.code)) {
        this.inputError = "请输入6位短信验证码";
        return false;
      }
      this.inputError = "";
      clearInterval(this._inter);
      this.$router.push({ path: "/login" });
    },
    // 获取验证码
    verCodeFun() {
      let time = 59;
      if (!validatePhone(this.form.phone)) {
        this.inputError = "请输入有效手机号码";
        return false;
      }
      if (!validatePwd(this.form.password)) {
        this.inputError = "密码须包含6~12位大小写字母、数字";
        return false;
      }
      this.inputError = "";
      if (this.validCode) {
        this.validCode = false;
        this.verCodeName = time + "秒";
        this._inter = setInterval(() => {
          time--;
          this.verCodeName = time + "秒";
          if (time == 0) {
            clearInterval(this._inter);
            this.verCodeName = "重新获取";
            this.validCode = true;
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scope>
.register {
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
</style>
