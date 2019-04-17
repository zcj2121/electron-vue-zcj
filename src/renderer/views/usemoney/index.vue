<template>
  <div class="content">
    <div class="content-nav">当前位置：用款管理</div>
    <div class="content-box">
      <div class="content-item" style="padding: 20px;">
        <div class="box-title-use">
          <img src="../../assets/img/use-noconfirm.png" alt>
          <span class="box-title-name">
            <span>待确认借款（</span>
            <span>2</span>
            <span>）</span>
          </span>
        </div>
        <div class="box-panel" style="margin-top: 15px;">
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="code" show-overflow-tooltip label="借款申请编号"></el-table-column>
            <el-table-column prop="money" label="借款金额"></el-table-column>
            <el-table-column prop="date" label="借款期限"></el-table-column>
            <el-table-column prop="lixi" label="借款利率"></el-table-column>
            <el-table-column prop="statu" label="还款方式"></el-table-column>
            <el-table-column prop="time" label="申请日期"></el-table-column>
            <el-table-column label="借款协议" align="center" width="120px;">
              <template slot-scope="scope">
                <a @click="toLoanconfirmFun" :id="scope">立即确认</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="box-title-use">
          <img src="../../assets/img/use-norepay.png" alt>
          <span class="box-title-name">
            <span>还款中借款（</span>
            <span>3</span>
            <span>）</span>
          </span>
        </div>
        <div class="box-panel" style="margin-top: 15px;">
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="code" show-overflow-tooltip label="借款申请编号"></el-table-column>
            <el-table-column prop="money" label="借款金额"></el-table-column>
            <el-table-column prop="date" label="借款期限"></el-table-column>
            <el-table-column prop="lixi" label="借款利率"></el-table-column>
            <el-table-column prop="money" label="剩余待还本金"></el-table-column>
            <el-table-column prop="time" label="最后还款日期"></el-table-column>
            <el-table-column label="借款协议" align="center" width="120px;">
              <template slot-scope="scope">
                <a :id="scope">下载</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="box-title-use">
          <img src="../../assets/img/use-confirme.png" alt>
          <span class="box-title-name">
            <span>已确认借款（</span>
            <span>3</span>
            <span>）</span>
          </span>
        </div>
        <div class="box-panel" style="margin-top: 15px;">
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="code" show-overflow-tooltip label="借款编号"></el-table-column>
            <el-table-column prop="money" label="借款金额"></el-table-column>
            <el-table-column prop="date" label="借款期限"></el-table-column>
            <el-table-column prop="lixi" label="借款利率"></el-table-column>
            <el-table-column prop="statu" label="还款方式"></el-table-column>
            <el-table-column prop="time" label="申请日期"></el-table-column>
            <el-table-column label="借款协议" align="center" width="120px;">
              <template slot-scope="scope">
                <a :id="scope">下载</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="box-title-use">
          <img src="../../assets/img/use-complete.png" alt>
          <span class="box-title-name">
            <span>已完成借款（</span>
            <span>3</span>
            <span>）</span>
          </span>
        </div>
        <div class="box-panel" style="margin-top: 15px;">
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="code" show-overflow-tooltip label="借款编号"></el-table-column>
            <el-table-column prop="money" label="借款金额"></el-table-column>
            <el-table-column prop="date" label="借款期限"></el-table-column>
            <el-table-column prop="lixi" label="借款利率"></el-table-column>
            <el-table-column prop="statu" label="还款方式"></el-table-column>
            <el-table-column prop="time" label="申请日期"></el-table-column>
            <el-table-column label="借款协议" align="center" width="120px;">
              <template slot-scope="scope">
                <a :id="scope">下载</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usemoney",
  components: {},
  data() {
    return {
      tableData: [
        {
          code: "100010102312",
          time: "2019-01-01",
          date: "3个月",
          lixi: "12%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          code: "100010102312",
          time: "2019-01-01",
          date: "3个月",
          lixi: "12%",
          money: "10000元",
          statu: "等额本息"
        }
      ]
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    // 前往 立即确认
    toLoanconfirmFun() {
      this.$router.push({ path: "/loanconfirm" });
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
