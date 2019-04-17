<template>
  <div class="content">
    <div class="content-nav">当前位置：授信管理</div>
    <div class="content-box">
      <div class="content-item" style="padding: 20px;">
        <div class="box-title-use">
          <a href class="box-title-use-dwon">
            <img class="down-img" src="../../assets/img/down.png" alt>
            <img class="down-hover-img" src="../../assets/img/down-hover.png" alt>下载模版
          </a>
        </div>
        <div class="box-panel" style="margin-top: 10px;">
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="code" show-overflow-tooltip label="授信申请编号"></el-table-column>
            <el-table-column prop="time" label="借款期限"></el-table-column>
            <el-table-column prop="money" label="总融资成本"></el-table-column>
            <el-table-column prop="statu" label="还款方式"></el-table-column>
            <el-table-column prop="money" label="期望授信额度"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <div class="btn-box">
                  <el-button
                    size="mini"
                    class="btn success-btn btn-xs go-upfile-btn"
                    @click="upFileShow = true"
                    :id="scope"
                  >上传</el-button>
                  <el-button
                    size="mini"
                    class="btn default-btn btn-xs go-credit-btn"
                    @click="modalCreateShow = true"
                  >生成额度</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="box-title-use">
          <img src="../../assets/img/creditquota.png" alt>
          <span class="box-title-name">
            <span>授信额度（</span>
            <span>8</span>
            <span>）</span>
          </span>
        </div>
        <div class="box-panel" style="margin-top: 15px;">
          <el-table
            :data="tableList"
            :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c;'}"
            border
            stripe
            style="width: 100%"
          >
            <el-table-column prop="index" show-overflow-tooltip label="序号" width="80px"></el-table-column>
            <el-table-column prop="code" label="授信申请编号"></el-table-column>
            <el-table-column prop="money" label="期望授信额度"></el-table-column>
            <el-table-column prop="money" label="授信批贷额度"></el-table-column>
            <el-table-column prop="time" label="授信期限"></el-table-column>
            <el-table-column prop="all" label="总融资成本"></el-table-column>
            <el-table-column prop="statu" label="还款方式"></el-table-column>
            <el-table-column prop="money" label="有效额度"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <a
                  class="go-apply-btn"
                  data-id="122"
                  @click="modalApplyShow = true"
                  :id="scope"
                >申请借款</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 上传 模态框 -->
    <el-dialog class="dialog-no-bgbr" :visible.sync="upFileShow" top="30vh" width="450px">
      <form class="form-horizontal">
        <div class="form-group form-group-sm" style="margin-bottom: 0px;margin-top: 10px;">
          <label
            class="control-label label-sm col-df-label"
            style="width:20% !important;color: #666666;padding-top: 5px;text-align: right;"
          >上传文件&nbsp;&nbsp;</label>
          <div class="no-pl col-df-box" style="width:75% !important;">
            <div class="btn-box modal-onupfile" @click="upBtnFile">
              <input type="file" style="display: none" ref="upFile" @change="fileData">
              <el-input v-model="upFileName" size="small" class="fl up-file-show" disabled></el-input>
              <el-button size="mini" class="btn default-btn flup-file-btn" style>选择文件</el-button>
            </div>
          </div>
        </div>
      </form>
      <div slot="footer" class="dialog-footer">
        <div class="btn-box">
          <el-button class="btn success-btn sub-btn" type="primary" @click="fileUpSave">立即上传</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 上传 模态框 -->

    <!-- 生成额度 模态框 -->
    <el-dialog class="dialog-no-bgbr" :visible.sync="modalCreateShow" top="30vh" width="450px">
      <div style="color: #666666;">生成额度后则不可继续上传授信数据，由于生成额度大约需30分钟，如申请借款请稍后登录系统查询额度。</div>
      <div slot="footer" class="dialog-footer">
        <div class="btn-box">
          <el-button
            class="btn success-btn sub-btn"
            type="primary"
            @click="modalCreateShow = false"
          >继续申请</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 生成额度 模态框 -->

    <!-- 申请借款 模态框 -->
    <el-dialog title="申请借款信息" :visible.sync="modalApplyShow" top="30vh" width="450px">
      <form class="form-horizontal apply-modal-form">
        <div class="form-group">
          <label class="control-label label-sm col-modal-label">授信总额度</label>
          <div class="no-pl col-modal-box">
            <div class="col-modal-box-text">1,000,000.00</div>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label label-sm col-modal-label">可用额度</label>
          <div class="no-pl col-modal-box">
            <div class="col-modal-box-text">1,000,000.00</div>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label label-sm col-modal-label">
            <span class="muted">*</span>借款金额
          </label>
          <div class="no-pl col-modal-box">
            <el-input v-model="input" size="mini" class="fl" style="width:100px !important;"></el-input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label label-sm col-modal-label">借款利率</label>
          <div class="no-pl col-modal-box">
            <div class="col-modal-box-text">12.00%</div>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label label-sm col-modal-label">借款期限</label>
          <div class="no-pl col-modal-box">
            <div class="col-modal-box-text">15天</div>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 15px;">
          <label class="control-label label-sm col-modal-label">还款方式</label>
          <div class="no-pl col-modal-box">
            <div class="col-modal-box-text">等额本息</div>
          </div>
        </div>
      </form>
      <div class="btn-box">
        <el-button class="btn default-btn" type="default" @click="modalApplyShow = false">稍后再试</el-button>
        <el-button
          class="btn success-btn sub-btn"
          type="primary"
          @click="modalApplyShow = false"
        >确认借款</el-button>
      </div>
    </el-dialog>
    <!-- 申请借款 模态框 -->
  </div>
</template>

<script>
export default {
  name: "credit",
  components: {},
  data() {
    return {
      tableData: [
        {
          code: "100010102312",
          time: "2019-01-01",
          money: "10000元",
          statu: "等额本息"
        },
        {
          code: "100010102312",
          time: "2019-01-01",
          money: "10000元",
          statu: "等额本息"
        }
      ],
      tableList: [
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        },
        {
          index: "1",
          code: "100010102312",
          time: "3个月",
          all: "80%",
          money: "10000元",
          statu: "等额本息"
        }
      ],
      input: "",
      upFileName: "",
      upFile: "",
      upFileShow: false,
      modalApplyShow: false,
      modalCreateShow: false
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    // 选择上传图片
    upBtnFile() {
      const event = new MouseEvent("click");
      this.$refs.upFile.dispatchEvent(event);
    },
    // 准备上传图片
    fileData(e) {
      this.upFile = "";
      this.upFileName = "";
      const file = e.target.files[0] || e.dataTransfer.files[0];
      if (file) {
        this.upFile = file;
        this.upFileName = file.name;
      }
    },
    // 点击立即上传
    fileUpSave() {
      const fd = new FormData();
      if (upFile) {
        fd.append("file", upFile);
        // upFile(fd)
        //   .then(response => {
        //     if (response) {
        //       this.upFileShow = false;
        //     } else {
        //       this.upFileShow = false;
        //     }
        //   })
        //   .catch(() => {});
      }
    }
  }
};
</script>

<style lang="scss">
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
.box-title-use-dwon {
  color: #6c99f6;
  font-size: 14px;
  float: right;
  overflow: hidden;
}

.box-title-use-dwon .down-img,
.box-title-use-dwon:hover .down-hover-img,
.box-title-use-dwon:active .down-hover-img {
  display: initial;
  vertical-align: middle;
}

.box-title-use-dwon:hover .down-img,
.box-title-use-dwon:active .down-img,
.box-title-use-dwon .down-hover-img {
  display: none;
  vertical-align: middle;
}

.box-title-use-dwon img {
  width: 16px !important;
  height: 16px !important;
  margin-right: 5px !important;
}
.up-file-show {
  width: 70% !important;
  cursor: pointer;
  input {
    background-color: inherit !important;
    cursor: pointer !important;
  }
}
.flup-file-btn {
  margin-left: 5px !important;
  padding: 4px 10px !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}
.apply-modal-form {
  .form-group {
    margin-bottom: 5px;
    .control-label {
      text-align: right;
    }
  }
}
</style>
