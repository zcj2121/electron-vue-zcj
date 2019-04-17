<template>
  <div class="content usermanage">
    <div class="content-nav">当前位置：账户详情</div>
    <div class="content-box">
      <div class="box-aside">
        <div class="content-item">
          <div class="box-title">账户概览</div>
          <div class="box-panel">
            <div class="user-box">
              <div class="user-box-icon">
                <img src="../../assets/img/user-balance.png" alt>
              </div>
              <div class="user-box-content">
                <div class="user-box-content-title">账户余额</div>
                <div class="user-box-content-money">120,000.00</div>
              </div>
            </div>
            <div class="user-box">
              <div class="user-box-icon">
                <img src="../../assets/img/user-freeze.png" alt>
              </div>
              <div class="user-box-content">
                <div class="user-box-content-title">冻结金额</div>
                <div class="user-box-content-money">6,200.00</div>
              </div>
            </div>
            <div class="user-box">
              <div class="user-box-icon">
                <img src="../../assets/img/user-usable.png" alt>
              </div>
              <div class="user-box-content">
                <div class="user-box-content-title">可用余额</div>
                <div class="user-box-content-money">58,000.00</div>
              </div>
              <div class="btn-box user-box-btn">
                <el-button class="btn success-btn sub-btn" type="primary">提现</el-button>
              </div>
            </div>
          </div>
          <div class="br-line"></div>
          <div class="box-title">
            <span>账户明细</span>
            <span class="show-hide-box" @click="detailShowChange">
              <el-tooltip
                class="item"
                effect="dark"
                :content="detailShow?'显示':'隐藏'"
                placement="top"
              >
                <img
                  :src="detailShow?require('../../assets/img/user-eye-show.png'):require('../../assets/img/user-eye-hide.png')"
                  alt
                >
              </el-tooltip>
            </span>
          </div>
          <div class="box-panel" style="margin-top: 15px;">
            <div class="box-detail-null">
              <img src="../../assets/img/user-detail-null.png" alt>
              <div>小主，您的共管账户还未开通ㄒoㄒ</div>
            </div>
            <div class="box-detail">
              <div class="box-detail-fox">
                <div class="box-detail-item">
                  <span>账号：</span>
                  <span>尾号</span>
                  <span>{{detailShow?'0070':'****'}}</span>
                </div>
                <div class="box-detail-item">
                  <span>账户余额：</span>
                  <span>{{detailShow?'100,000.00':'****'}}</span>
                </div>
                <div class="box-detail-item">
                  <span>可用余额：</span>
                  <span>{{detailShow?'100,000.00':'****'}}</span>
                </div>
                <div class="box-detail-item">
                  <span>冻结余额：</span>
                  <span>{{detailShow?'100,000.00':'****'}}</span>
                </div>
              </div>
              <div class="box-detail-fox">
                <div class="box-detail-item">
                  <span>账号：</span>
                  <span>尾号</span>
                  <span>{{detailShow?'0070':'****'}}</span>
                </div>
                <div class="box-detail-item">
                  <span>账户余额：</span>
                  <span>{{detailShow?'100,000.00':'****'}}</span>
                </div>
                <div class="box-detail-item">
                  <span>可用余额：</span>
                  <span>{{detailShow?'100,000.00':'****'}}</span>
                </div>
                <div class="box-detail-item">
                  <span>冻结余额：</span>
                  <span>{{detailShow?'100,000.00':'****'}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-item" style="margin-top: 15px;">
          <div class="box-title">资金记录</div>
          <div class="box-panel" style="margin-top: 20px;">
            <div class="search-box">
              <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline"
                size="mini"
                label-position="left"
                label-width="70px"
              >
                <el-form-item label="账号">
                  <el-input v-model="formInline.user" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item class="pl-20" label="发生日期">
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date1"
                      style="width: 100%;"
                      ref="date1"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line text-c" :span="2">至</el-col>
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date2"
                      style="width: 100%;"
                      ref="date2"
                    ></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="交易类型">
                  <el-select
                    ref="region"
                    v-model="formInline.region"
                    placeholder="请选择交易类型"
                    style="width:100%;"
                  >
                    <el-option label="收入" value="shouru"></el-option>
                    <el-option label="支出" value="zhichu"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="pl-20">
                  <div class="btn-box" style="text-align: left;">
                    <el-button class="btn default-btn" type="default">筛选</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
            <el-table
              :data="tableData"
              :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
              border
              stripe
              style="width: 100%;margin-top: 10px;"
            >
              <el-table-column prop="index" label="序号" width="60px"></el-table-column>
              <el-table-column prop="statu" label="交易类型"></el-table-column>
              <el-table-column prop="time" label="交易时间" min-width="100px"></el-table-column>
              <el-table-column prop="statu" label="类别" width="60px"></el-table-column>
              <el-table-column prop="money2" label="交易金额"></el-table-column>
              <el-table-column prop="money2" label="账户余额"></el-table-column>
              <el-table-column prop="money2" label="可用余额"></el-table-column>
              <el-table-column prop="money2" label="冻结余额"></el-table-column>
              <el-table-column prop="user" label="账号"></el-table-column>
            </el-table>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text=" 上一页"
            next-text="下一页 "
            :total="100"
          ></el-pagination>
        </div>
      </div>

      <div class="box-info">
        <div class="content-item">
          <div class="box-title" style="border-left:none;padding-left:0px;">账户信息</div>
          <div class="box-panel" style="margin-top: 15px;">
            <div class="user-info-box">
              <div class="user-info-icon">
                <img src="../../assets/img/work-company.png">
              </div>
              <div class="user-info-detail">
                <div>
                  <span>名称：</span>
                  <span>北京******公司</span>
                </div>
                <div>
                  <span>手机号：</span>
                  <span>152****1234</span>
                </div>
              </div>
            </div>
            <div class="user-info-auth">
              <img src="../../assets/img/user-auth.png" alt>
              <span>您还未通过CA证书申请</span>
            </div>
          </div>
        </div>
        <div class="content-item" style="margin-top: 15px;">
          <div class="box-title" style="border-left:none;padding-left:0px;">信用账户</div>
          <div class="box-panel" style="margin-top: 2px;">
            <div class="money-info-box">
              <span>最高额度</span>
              <span class="money-info-detail">100,000.00</span>
            </div>
            <div class="money-info-box">
              <span>最高额度</span>
              <span class="money-info-detail">100,000.00</span>
            </div>
            <div class="money-info-box">
              <span>最高额度</span>
              <span class="money-info-detail">100,000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usermanage",
  components: {},
  data() {
    return {
      tableData: [
        {
          index: "1",
          statu: "收入",
          user: "admin",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        },
        {
          index: "1",
          user: "admin",
          statu: "收入",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        },
        {
          index: "1",
          user: "admin",
          statu: "收入",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        },
        {
          index: "1",
          statu: "收入",
          user: "admin",
          time: "2019-01-01",
          money: "20000.00",
          money1: "66.66",
          money2: "20066.66"
        }
      ],
      formInline: {
        user: "",
        region: ""
      },
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      detailShow: false
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    detailShowChange() {
      this.detailShow = !this.detailShow;
    },
    onSubmit() {}
  }
};
</script>

<style lang="scss">
.usermanage {
  .content-box {
    overflow: hidden;
  }
  .box-aside {
    width: calc(100% - 340px);
    float: left;
    .show-hide-box {
      margin-left: 5px;
      width: 20px;
      overflow: hidden;
      line-height: 16px;
      cursor: pointer;
      img {
        width: 20px;
        margin-bottom: -2px;
      }
    }
    .user-box {
      width: 33.3333333%;
      float: left;
      overflow: hidden;
      border-right: 2px solid #fbfbfb;
      padding: 20px;
      height: 130px;
      .user-box-icon {
        float: left;
        width: 30px;
        height: 62px;
        line-height: 62px;
        img {
          width: 100%;
          height: auto;
          vertical-align: middle;
        }
      }
      .user-box-content {
        float: left;
        vertical-align: middle;
        height: 62px;
        margin-left: 10px;
        &-title {
          font-size: 14px;
          color: #949494;
        }
        &-money {
          margin-top: 2px;
          font-size: 28px;
          color: #2c2c2c;
        }
      }
      .user-box-btn {
        margin-left: 40px;
        padding-top: 8px;
        clear: both;
        text-align: left;
      }
    }
    .user-box:first-child {
      padding-left: 0px;
    }
    .user-box:last-child {
      border-right: none;
    }
    .br-line {
      width: 100%;
      height: 2px;
      background: #fbfbfb;
      margin-top: 15px;
      margin-bottom: 25px;
    }
    .box-detail-null {
      text-align: center;
      color: #949494;
      font-size: 14px;
      margin-top: 30px;
      text-align: center;
      color: #949494;
      font-size: 14px;
      margin-bottom: 20px;
      img {
        width: 56px;
        height: 56px;
      }
      div {
        margin-top: 15px;
      }
    }
    .box-detail {
      padding: 0 15px;
      background: #fbfbfb;
      overflow: hidden;

      .box-detail-fox {
        overflow: hidden;
        border-bottom: 1px solid #f4f4f4;
        .box-detail-item {
          color: #949494;
          float: left;
          width: 25%;
          padding: 15px;
          span:last-child {
            color: #2c2c2c;
          }
        }
      }
      .box-detail-fox:last-child {
        border: none;
      }
    }
    .search-box {
      overflow: hidden;
      .el-form-item {
        float: left;
        width: 48.5%;
        padding-left: 10px;
        margin-bottom: 10px;
      }
      .el-form-item__content {
        width: 78%;
      }
      .el-form-item.pl-20 {
        padding-left: 20px;
      }
      .el-form-item__label {
        text-align: justify;
        text-align-last: justify;
      }
    }
    .el-pagination {
      text-align: center;
      .btn-prev,
      .btn-next {
        font-size: 12px;
        box-shadow: 0px 0px 0px 1px #ccc;
        border-radius: 2px;
        background: #fff;
        line-height: 14px;
        overflow: hidden;
        span {
          font-size: 12px;
          padding: 0 10px;
          color: #2f81ff;
        }
      }
      .btn-prev {
        span::before {
          content: "◀";
          color: #ffad37;
        }
      }
      .btn-next {
        span::after {
          content: "▶";
          color: #ffad37;
        }
      }
      .el-pager {
        .number {
          font-size: 12px;
          background: #fff;
          box-shadow: 0px 0px 0px 1px #ccc;
          color: #2f81ff;
          font-weight: 400;
        }
        .number.active {
          background: #fcf6ef;
          box-shadow: 0px 0px 0px 1px #ffad37;
          color: #ffad37;
        }
        .el-icon {
          background: #fff;
          color: #2f81ff;
        }
      }
    }
  }
  .box-info {
    width: 330px;
    float: right;
    .user-info-box {
      overflow: hidden;
      .user-info-icon {
        float: left;
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .user-info-detail {
        vertical-align: middle;
        height: 50px;
        margin-left: 15px;
        float: left;
        color: #666666;
        font-size: 14px;
        span {
          line-height: 25px;
        }
      }
    }
    .user-info-auth {
      margin-top: 15px;
      img {
        width: 15px;
        vertical-align: middle;
      }
      span {
        font-size: 12px;
        color: #2f81ff;
        margin-left: 5px;
      }
    }
    .money-info-box {
      color: #949494;
      margin-top: 15px;
      font-size: 14px;
      .money-info-detail {
        margin-left: 25px;
        font-size: 16px;
        color: #2c2c2c;
      }
    }
  }
  .box-title {
    border-left: 4px solid #2f81ff;
    line-height: 16px;
    font-size: 16px;
    padding-left: 5px;
  }

  .box-panel {
    margin-top: 20px;
    overflow: hidden;
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
}
</style>
