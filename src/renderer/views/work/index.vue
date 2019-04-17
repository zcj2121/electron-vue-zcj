<template>
  <div class="content">
    <div class="content-work">
      <div class="work-aside">
        <div class="work-aside-username">
          <img src="../../assets/img/work-company.png">
          <div class="work-aside-title">北京易宝金融信息服务有限公司</div>
          <div class="work-aside-statu">
            电子签名：
            <span>已开通</span>
          </div>
        </div>
        <div class="work-aside-contact">
          <div class="work-aside-item">
            <div class="work-aside-item-title">证件号码</div>
            <div class="work-aside-item-value">430811199110102210</div>
          </div>
          <div class="work-aside-item">
            <div class="work-aside-item-title">手机号码</div>
            <div class="work-aside-item-value">15888888888</div>
          </div>
          <div class="work-aside-item">
            <div class="work-aside-item-title">企业邮箱</div>
            <div class="work-aside-item-value">123456@yeepay.com</div>
          </div>
        </div>
      </div>
      <div class="work-content">
        <div class="work-content-header">
          <span class>
            <img src="../../assets/img/work-title.png">工作台
          </span>
          <span class="work-content-header-set">
            <img class="work-content-header-setimg" src="../../assets/img/work-set.png">
            <img class="work-content-header-sethoverimg" src="../../assets/img/work-set-hover.png">
            <div class="work-set-panel">
              <a class="work-set-panel-item">
                <img class="work-set-panel-item-img" src="../../assets/img/work-user.png">
                <img
                  class="work-set-panel-item-activeimg"
                  src="../../assets/img/work-user-active.png"
                >
                <span>个人信息</span>
              </a>
              <a class="work-set-panel-item on-edit-pwd" @click="modalEditPwd = true">
                <img class="work-set-panel-item-img" src="../../assets/img/work-pwd.png">
                <img
                  class="work-set-panel-item-activeimg"
                  src="../../assets/img/work-pwd-active.png"
                >
                <span>修改密码</span>
              </a>
              <a class="work-set-panel-item" @click="toLogoutFun">
                <img class="work-set-panel-item-img" src="../../assets/img/work-logout.png">
                <img
                  class="work-set-panel-item-activeimg"
                  src="../../assets/img/work-logout-active.png"
                >
                <span>退出登录</span>
              </a>
            </div>
          </span>
        </div>
        <div class="work-content-box">
          <a class="work-content-item" @click="toCreditFun">
            <img class="work-content-item-img" src="../../assets/img/work-credit.png">
            <img class="work-content-item-hoverimg" src="../../assets/img/work-credit-hover.png">
            <span>授信管理</span>
          </a>
          <a class="work-content-item" @click="toUsemoneyFun">
            <img class="work-content-item-img" src="../../assets/img/work-money.png">
            <img class="work-content-item-hoverimg" src="../../assets/img/work-money-hover.png">
            <span>用款管理</span>
          </a>
          <a class="work-content-item" @click="toUsermanageFun">
            <img
              style="padding-left: 5px;"
              class="work-content-item-img"
              src="../../assets/img/work-user-def.png"
            >
            <img
              style="padding-left: 5px;"
              class="work-content-item-hoverimg"
              src="../../assets/img/work-user-hover.png"
            >
            <span>用户管理</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 申请借款 模态框 -->
    <el-dialog title="修改密码" :visible.sync="modalEditPwd" top="30vh" width="500px">
      <form class="form-horizontal" id="myModalEditPwd">
        <div class="form-group form-group-sm form-group-sm-modal">
          <label class="control-label label-sm col-modal-label">原密码：</label>
          <div class="no-pl col-modal-box">
            <el-input
              size="mini"
              v-model="form.old_password"
              class="oldpassword"
              placeholder="请输入原密码"
            />
          </div>
        </div>
        <div class="form-group form-group-sm form-group-sm-modal">
          <label class="control-label label-sm col-modal-label">设置新密码：</label>
          <div class="no-pl col-modal-box">
            <el-input
              size="mini"
              v-model="form.new_password"
              class="password"
              placeholder="请输入新密码,6~12位,包含大小写字母、数字"
            />
          </div>
        </div>
        <div class="form-group form-group-sm form-group-sm-modal">
          <label class="control-label label-sm col-modal-label">确认新密码：</label>
          <div class="no-pl col-modal-box">
            <el-input
              size="mini"
              v-model="form.con_password"
              class="confirmpassword"
              placeholder="请再次输入新密码"
            />
          </div>
        </div>
        <div class="form-group form-group-sm form-group-sm-modal">
          <label class="control-label label-sm col-modal-label"></label>
          <div class="no-pl col-modal-box">
            <div class="input-error">{{inputError}}</div>
          </div>
        </div>
      </form>
      <div class="btn-box">
        <el-button class="btn default-btn" type="default" @click="modalEditPwd = false">取消</el-button>
        <el-button class="btn success-btn sub-btn" type="primary" @click="editPwdFun">保存</el-button>
      </div>
    </el-dialog>
    <!-- 申请借款 模态框 -->

    <!-- 确认退出 模态框 -->
    <el-dialog title="提示" :visible.sync="closeAlert" top="30vh" width="350px">
      <div class="el-message-box__content" style="margin-bottom: 15px;">
        <div class="el-message-box__status el-icon-warning"></div>
        <div class="el-message-box__message">
          <p>确认退出登录吗?</p>
        </div>
      </div>
      <div class="btn-box text-r">
        <el-button class="btn default-btn" type="default" @click="closeAlert = false">取消</el-button>
        <el-button class="btn success-btn sub-btn" type="primary" @click="closeAlertFun">确定</el-button>
      </div>
    </el-dialog>
    <!-- 确认退出 模态框 -->
  </div>
</template>

<script>
import { validatePwd } from "@/filters/index";
export default {
  name: "work",

  components: {},

  data() {
    return {
      inputError: "",
      modalEditPwd: false,
      closeAlert: false,
      form: {
        old_password: "",
        new_password: "",
        con_password: ""
      }
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    // 前往 授信管理
    toCreditFun() {
      this.$router.push({ path: "/credit" });
    },
    // 前往 用款管理
    toUsemoneyFun() {
      this.$router.push({ path: "/usemoney" });
    },
    // 前往 用户管理
    toUsermanageFun() {
      this.$router.push({ path: "/usermanage" });
    },
    // 退出登录
    toLogoutFun() {
      this.closeAlert = true;

      // this.$confirm("确认退出登录吗?", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // })
      //   .then(() => {
      //     this.$message({
      //       type: "success",
      //       message: "操作成功!"
      //     });
      //     this.$router.push({ path: "/login" });
      //   })
      //   .catch(() => {});
    },
    //确定
    closeAlertFun() {
      this.$router.push({ path: "/login" });
    },
    editPwdFun() {
      if (!this.form.old_password) {
        this.inputError = "请输入原始密码";
        return false;
      }
      if (
        !validatePwd(this.form.new_password) ||
        !validatePwd(this.form.con_password)
      ) {
        this.inputError = "密码须包含6~12位大小写字母、数字";
        return false;
      }
      if (this.form.new_password != this.form.con_password) {
        this.inputError = "两次密码输入不一致";
        return false;
      }
      this.inputError = "";
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style >
.content-work {
  min-width: 1170px;
  height: calc(100% - 30px);
  margin: 0px auto;
  border-radius: 2px;
  margin-top: 15px;
  padding: 0 30px;
  overflow: hidden;
}

.work-aside {
  width: 200px;
  margin-right: 15px;
  float: left;
  background: #ffffff;
  padding: 25px 20px;
  height: 100%;
}

.work-content {
  width: calc(100% - 215px);
  float: left;
  background: #ffffff;
  height: 100%;
}

.work-aside-username {
  border-bottom: 1px dashed #e6e6e6;
  text-align: center;
}

.work-aside-username img {
  width: 70px;
  height: 70px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.work-aside-title {
  margin-top: 10px;
  font-size: 15px;
  line-height: 26px;
}

.work-aside-statu {
  font-size: 12px;
  color: #949494;
  margin: 6px 0 10px;
}

.work-aside-statu span {
  color: #ffac36;
}

.work-aside-contact {
  padding: 10px 0 15px;
}

.work-aside-item {
  margin-top: 15px;
}

.work-aside-item-title {
  color: #949494;
}

.work-content-header {
  height: 46px;
  line-height: 46px;
  padding: 0 16px;
  background-color: #fafbfd;
  border-bottom: 1px solid #e6e6e6;
}

.work-content-header span:first-child img {
  margin-right: 8px;
}

.work-content-header-set {
  float: right;
  position: relative;
  display: block;
  width: 30px;
  text-align: right;
}

.work-content-header-setimg,
.work-content-header-set:hover .work-content-header-sethoverimg {
  display: initial;
  cursor: pointer;
  width: 16px;
  margin-bottom: -3px;
}

.work-content-header-sethoverimg,
.work-content-header-set:hover .work-content-header-setimg {
  display: none;
  cursor: pointer;
  width: 16px;
  margin-bottom: -3px;
}

.work-set-panel {
  position: absolute;
  width: 140px;
  border: 1px solid #e6e6e6;
  border-top: none;
  right: 0px;
  line-height: 25px;
  cursor: pointer;
  display: none;
}

.work-content-header-set:hover .work-set-panel {
  display: block;
}

.work-set-panel-item,
.work-set-panel-item:hover {
  padding: 2px;
  text-align: center;
  cursor: pointer;
  display: block;
  color: #2c2c2c !important;
  text-decoration: none !important;
}

.work-set-panel-item:active,
.work-set-panel-item:hover {
  color: #2f81ff !important;
}

.work-set-panel-item:hover .work-set-panel-item-img,
.work-set-panel-item:active .work-set-panel-item-img,
.work-set-panel-item-activeimg {
  display: none;
}

.work-set-panel-item:hover .work-set-panel-item-activeimg,
.work-set-panel-item:active .work-set-panel-item-activeimg,
.work-set-panel-item-img {
  display: initial;
}

.work-set-panel-item span {
  margin-left: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;
  vertical-align: middle;
}

.work-set-panel-item img {
  vertical-align: middle;
}

.work-set-panel-item:hover {
  background: #f9f9f9;
  cursor: pointer;
}

.work-content-box {
  padding: 20px;
  height: 530px;
  overflow: auto;
}

.work-content-item {
  width: 183px;
  height: 183px;
  float: left;
  text-align: center;
  padding: 50px 30px;
  background: #ffffff;
  cursor: pointer;
  text-decoration: none !important;
  color: #2c2c2c !important;
  box-shadow: 0px 0px 1px 0px #c6c6c6;
}

.work-content-item img {
  width: auto;
  height: 50px;
  margin: auto;
  text-align: center;
}

.work-content-item-img {
  display: block;
}

.work-content-item-hoverimg {
  display: none;
}

.work-content-item span {
  display: block;
  margin-top: 15px;
}

.work-content-item:hover {
  background: #599aff;
  border-color: #599aff;
  box-shadow: 0px 0px 2px 0px #599aff;
}

.work-content-item:hover .work-content-item-img {
  display: none;
}

.work-content-item:hover .work-content-item-hoverimg {
  display: block;
}

.work-content-item:hover span {
  color: #ffffff;
}

#myModalEditPwd .col-modal-label {
  width: 30% !important;
  text-align: right;
  padding-top: 4px;
}

#myModalEditPwd .col-modal-box {
  width: 60% !important;
}

#myModalEditPwd .form-group-sm-modal {
  margin-bottom: 15px;
}

#myModalEditPwd .form-group-sm-modal:nth-child(3) {
  margin-bottom: 6px !important;
}

#myModalEditPwd .form-group-sm-modal:last-child {
  margin-bottom: 10px;
}

#myModalEditPwd .form-group-sm-modal .input-error {
  line-height: 14px;
  margin-top: 0px;
}
</style>
