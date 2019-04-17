<template>
  <div class="content">
    <div class="content-nav">当前位置：商户忘记密码</div>
    <div class="content-box forget-box">
      <div class="content-item" style="padding: 0px;height: 100%;">
        <div class="forget-header">
          <div class="forget-header-box">
            <div class="forget-header-item" :class="{'active':forgetItem >= 1}">
              <div>输入手机号</div>
            </div>
            <div class="forget-header-item" :class="{'active':forgetItem >= 2}">
              <div>安全验证</div>
            </div>
            <div class="forget-header-item" :class="{'active':forgetItem >= 3}">
              <div>重置密码</div>
            </div>
            <div class="forget-header-item" :class="{'active':forgetItem >= 4}">
              <div>修改密码</div>
            </div>
          </div>
        </div>
        <div class="forget-content">
          <div class="forget-content-box">
            <div
              class="forget-content-item"
              :class="{'active':forgetItem >= 1}"
              v-show="forgetItem == 1"
            >
              <form class="form-forget-box">
                <div class="form-group">
                  <label for="phone">手机号</label>
                  <el-input v-model="form.phone" class="username" placeholder="请输入手机号"></el-input>
                </div>
                <div class="form-group no-mb">
                  <label for="code">图形验证码</label>
                  <div class="input-code-box">
                    <el-input
                      v-model="form.tucode"
                      class="code-input code-pic"
                      placeholder="请输入图形验证码"
                    ></el-input>
                    <span class="code-img">
                      <img src="../../assets/img/code-img.png" alt>
                    </span>
                    <a class="code-btn">换一张</a>
                  </div>
                </div>
                <div class="input-error">{{inputError}}</div>
                <div class="form-group btn-box">
                  <el-button
                    class="btn success-btn next-run"
                    type="primary"
                    :loading="false"
                    @click="nextFun(2)"
                  >下一步</el-button>
                </div>
              </form>
            </div>

            <div
              class="forget-content-item"
              :class="{'active':forgetItem >= 2}"
              v-show="forgetItem == 2"
            >
              <form class="form-forget-box">
                <div class="form-group">
                  <label for="phone">手机号</label>
                  <div class="text-def-box username-text">{{form.phone}}</div>
                </div>
                <div class="form-group no-mb">
                  <label for="code">验证码</label>
                  <div class="input-code-box btn-box">
                    <el-input
                      v-model="form.xincode"
                      class="ver-input code-phone"
                      placeholder="请输入短信验证码"
                    ></el-input>

                    <el-button
                      style="font-size: 14px;"
                      class="btn success-btn code-phone-btn"
                      type="primary"
                      :loading="false"
                      @click="verCodeFun"
                    >{{verCodeName}}</el-button>
                  </div>
                </div>
                <div class="input-error">{{inputError}}</div>
                <div class="form-group btn-box">
                  <el-button
                    class="btn success-btn next-run"
                    type="primary"
                    :loading="false"
                    @click="nextFun(3)"
                  >下一步</el-button>
                </div>
              </form>
            </div>
            <div
              class="forget-content-item"
              :class="{'active':forgetItem >= 3}"
              v-show="forgetItem == 3"
            >
              <form class="form-forget-box">
                <div class="form-group">
                  <label for="phone">设置新密码</label>
                  <el-input v-model="form.password" class="password" placeholder="6~12位,包含大小写字母、数字"></el-input>
                </div>
                <div class="form-group no-mb">
                  <label for="code">确认新密码</label>
                  <el-input
                    v-model="form.conpassword"
                    class="confirmpassword"
                    placeholder="请再次确认密码"
                  ></el-input>
                </div>
                <div class="input-error">{{inputError}}</div>
                <div class="form-group btn-box">
                  <el-button
                    class="btn success-btn next-run"
                    type="primary"
                    :loading="false"
                    @click="nextFun(4)"
                  >提交</el-button>
                </div>
              </form>
            </div>
            <div
              class="forget-content-item"
              :class="{'active':forgetItem >= 4}"
              v-show="forgetItem == 4"
            >
              <form class="form-forget-box">
                <div class="success-forget-box">
                  <img src="../../assets/img/success.png" alt>
                  <div class="success-forget-text">恭喜您，密码修改成功!</div>
                </div>
                <div class="form-group btn-box">
                  <el-button
                    class="btn success-btn next-run"
                    type="primary"
                    :loading="false"
                    @click="backHomeFun"
                  >返回首页登录</el-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validatePwd, validatePhone } from "@/filters/index";
export default {
  name: "forget",
  components: {},
  data() {
    return {
      input: "",
      inputError: "",
      forgetItem: 1,
      validCode: true,
      verCodeName: "获取短信验证码",
      form: {
        phone: "",
        tucode: "",
        xincode: "",
        password: "",
        conpassword: ""
      }
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
    nextFun(val) {
      if (val == 2) {
        if (!validatePhone(this.form.phone)) {
          this.inputError = "请输入有效手机号码";
          return false;
        }
        if (this.form.tucode.length != 4) {
          this.inputError = "请输入4位有效图形验证码";
          return false;
        }
      } else if (val == 3) {
        if (this.form.xincode.length != 6) {
          this.inputError = "请输入6位有效短信验证码";
          return false;
        }
      } else if (val == 4) {
        if (
          !validatePwd(this.form.password) ||
          !validatePwd(this.form.conpassword)
        ) {
          this.inputError = "密码须包含6~12位大小写字母、数字";
          return false;
        }
        if (this.form.password != this.form.conpassword) {
          this.inputError = "两次密码输入不一致";
          return false;
        }
      }
      clearInterval(this._inter);
      this.inputError = "";
      this.forgetItem = val;
    },
    // 获取验证码
    verCodeFun() {
      let time = 59;
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
    },
    // 返回首页
    backHomeFun() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scope>
.forget-box {
  margin-bottom: 0px;
  height: calc(100% - 60px);
}

.forget-header {
  background: #f4f8ff;
  padding: 25px;
}

.forget-header-box {
  width: 650px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.forget-header-item {
  width: 70px;
  text-align: center;
  position: relative;
  color: #666666;
  white-space: nowrap;
}

.forget-header-item:after {
  content: "";
  display: block;
  position: absolute;
  width: 140px;
  height: 2px;
  background: #b7b7b7;
  top: 13px;
  left: -132px;
}

.forget-header-item:nth-child(1):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-1.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item:nth-child(2):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-2.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item:nth-child(3):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-3.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item:nth-child(4):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-4.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item.active:nth-child(1):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-11.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item.active:nth-child(2):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-22.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item.active:nth-child(3):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-33.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item.active:nth-child(4):before {
  content: " ";
  display: inherit;
  width: 26px;
  height: 27px;
  background: url(../../assets/img/forget-44.png) no-repeat;
  background-size: 100%;
  margin: auto;
}

.forget-header-item:first-child:after {
  display: none;
}

.forget-header-item img {
  width: 26px;
  height: auto;
}

.forget-header-item div {
  margin-top: 8px;
}

.forget-header-item.active {
  color: #3080ff;
}

.forget-header-item.active:after {
  background: #3080ff;
}

.forget-content-box {
  width: 350px;
  margin: auto;
  margin-top: 40px;
}

.form-forget-box label {
  font-weight: 400;
  color: #2c2c2c;
}

.form-forget-box .no-mb {
  margin-bottom: 0px;
}

.form-forget-box .form-control {
  height: 40px;
}

.form-forget-box .input-error {
  margin-top: 5px;
  padding-left: 4px;
}

.forget-content-box .btn-box {
  margin-top: 20px;
}

.forget-content-box .success-btn {
  width: 100%;
  font-size: 16px;
  padding: 9px !important;
}

.forget-content-item:first-child {
  display: block;
}

.form-forget-box .input-code-box {
  overflow: hidden;
  margin-top: 0px;
}

.form-forget-box .input-code-box .code-img {
  border: 1px solid #ccc;
  border-radius: 4px;
  float: left;
  height: 40px;
  width: 94px;
  margin: 0 14px;
  overflow: hidden;
}

.form-forget-box .input-code-box .code-img img {
  width: 100%;
  height: 100%;
}

.form-forget-box .input-code-box .code-btn {
  padding: 10px 0;
  float: left;
  cursor: pointer;
}

.form-forget-box .input-code-box .code-input {
  float: left;
  width: 185px;
}

.form-forget-box .input-code-box .ver-input {
  float: left;
  width: 210px;
}

.form-forget-box .input-code-box .success-btn {
  float: left;
  width: 124px;
  text-align: center;
}

.form-forget-box .text-def-box {
  padding-top: 6px;
  height: 40px;
  font-size: 16px;
}

.form-forget-box .success-forget-box {
  text-align: center;
  padding: 38px 0 22px;
}

.form-forget-box .success-forget-box img {
  width: 50px;
  height: auto;
  text-align: center;
}

.form-forget-box .success-forget-box .success-forget-text {
  margin-top: 24px;
  font-size: 20px;
  text-align: center;
}
</style>
