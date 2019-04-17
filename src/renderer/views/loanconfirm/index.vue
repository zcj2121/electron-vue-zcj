<template>
  <div class="content">
    <div class="content-nav">当前位置：借款人端 > 借款信息确认</div>
    <div class="content-box">
      <div class="content-item">
        <div class="box-title">借款基本信息</div>
        <div class="box-panel">
          <form class="form-horizontal">
            <div class="form-group form-group-sm">
              <label class="control-label label-sm col-df-label text-r">申请流水号：</label>
              <div class="no-pl col-df-box-pap">12123123123123</div>
              <label class="control-label label-sm col-df-label text-r">借款金额：</label>
              <div class="no-pl col-df-box-pap">10000元</div>
              <label class="control-label label-sm col-df-label text-r">申请日期：</label>
              <div class="no-pl col-df-box-pap">2018-10-10</div>
            </div>
            <div class="form-group form-group-sm">
              <label class="control-label label-sm col-df-label text-r">授信额度产品：</label>
              <div class="no-pl col-df-box-pap">123123123</div>
              <label class="control-label label-sm col-df-label text-r">资金方：</label>
              <div class="no-pl col-df-box-pap">和质量化</div>
              <label class="control-label label-sm col-df-label text-r">还款方式：</label>
              <div class="no-pl col-df-box-pap">按月付息，到期还本</div>
            </div>
            <div class="form-group form-group-sm">
              <label class="control-label label-sm col-df-label text-r">项目名称：</label>
              <div class="no-pl col-df-box-pap">和气贷</div>
              <label class="control-label label-sm col-df-label text-r">用款产品：</label>
              <div class="no-pl col-df-box-pap">和智宝盒</div>
              <label class="control-label label-sm col-df-label text-r">借款利率：</label>
              <div class="no-pl col-df-box-pap">一次还本付息</div>
            </div>
            <div class="form-group form-group-sm">
              <label class="control-label label-sm col-df-label text-r">客户名称：</label>
              <div class="no-pl col-df-box-pap">张萌萌</div>
              <label class="control-label label-sm col-df-label text-r">客户编号：</label>
              <div class="no-pl col-df-box-pap">123123123123123</div>
              <label class="control-label label-sm col-df-label text-r">借款期限：</label>
              <div class="no-pl col-df-box-pap">3个月</div>
            </div>
          </form>
        </div>
        <div class="line-br"></div>
        <div class="box-title">预划扣计划</div>
        <div class="box-panel" style="margin-top: 15px;">
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="index" label="序号" width="100px"></el-table-column>
            <el-table-column prop="time" label="计划划扣日期"></el-table-column>
            <el-table-column prop="money" label="计划划扣本金"></el-table-column>
            <el-table-column prop="money1" label="计划划扣利息"></el-table-column>
            <el-table-column prop="money2" label="计划划扣总金额"></el-table-column>
          </el-table>
          <div class="read-box text-c">
            <label class="checkbox-inline" style="font-weight: 400;">
              <input type="checkbox" id="inlineCheckbox3" v-model="isRead">我已阅读并确认
              <a href="javascript:void(0)" id="aStop">《借款协议》</a> 中的全部条款
            </label>
          </div>
          <div class="btn-box" style="margin-top:30px;">
            <el-button
              class="btn default-btn"
              type="default"
              @click="toBackFun('确认拒绝借款信息吗?', false)"
            >拒绝</el-button>
            <el-button
              class="btn success-btn sub-btn"
              type="primary"
              @click="toBackFun('确认保存借款信息吗?', true)"
            >确认</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 确认\取消 模态框 -->
    <el-dialog title="提示" :visible.sync="closeAlert" top="30vh" width="350px">
      <div class="el-message-box__content" style="margin-bottom: 15px;">
        <div class="el-message-box__status el-icon-warning"></div>
        <div class="el-message-box__message">
          <p>{{closeName}}</p>
        </div>
      </div>
      <div class="btn-box text-r">
        <el-button class="btn default-btn" type="default" @click="closeAlert = false">取消</el-button>
        <el-button class="btn success-btn sub-btn" type="primary" @click="closeAlertFun">确定</el-button>
      </div>
    </el-dialog>
    <!-- 确认\取消 模态框 -->
  </div>
</template>

<script>
export default {
  name: "loanconfirm",
  components: {},
  data() {
    return {
      tableData: [
        {
          index: "1",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        },
        {
          index: "1",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        },
        {
          index: "1",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        },
        {
          index: "1",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        }
      ],
      isRead: false,
      closeAlert: false,
      isCloseSave: false,
      closeName: ""
    };
  },
  computed: {},

  watch: {},

  created() {},

  mounted() {
    /* checkbox 点击协议  冒泡处理*/
    let aStop = document.querySelector(".checkbox-inline a");
    aStop.addEventListener(
      "click",
      function(evt) {
        var e = evt ? evt : window.event;
        if (window.event) {
          e.cancelBubble = true;
        } else {
          //e.preventDefault();
          e.stopPropagation();
        }
      },
      false
    );
  },

  destroyed() {},

  methods: {
    // 前往 用款管理
    toBackFun(val, type) {
      if (!this.isRead) {
        this.$message({
          type: "warning",
          message: "请勾选我已阅读并确认 《借款协议》 中的全部条款"
        });
        return false;
      }
      this.closeName = val;
      this.isCloseSave = type;
      this.closeAlert = true;
    },
    // 确定、取消
    closeAlertFun() {
      if (this.isCloseSave) {
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.$router.push({ path: "/usemoney" });
      } else {
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.$router.push({ path: "/usemoney" });
      }
      this.closeAlert = false;
    }
  }
};
</script>

<style lang="scss" scope>
.box-title {
  border-left: 4px solid #2f81ff;
  line-height: 16px;
  font-size: 16px;
  padding-left: 5px;
}

.box-panel {
  margin-top: 20px;
}
.box-title-use {
  border-left: none;
  line-height: 16px;
  font-size: 16px;
  padding-left: 0px;
  overflow: hidden;
}

.box-title-use img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}

.box-title-use .box-title-name {
  vertical-align: middle;
  margin-left: 5px;
}

table a {
  text-decoration: none !important;
  color: #6c99f6;
  cursor: pointer;
}

table a:hover,
table a:active {
  color: #2f81ff;
}
</style>
