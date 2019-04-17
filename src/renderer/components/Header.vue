<template>
  <div class="header">
    <div class="logo-box">
      <a @click="toWorkFun">
        <img src="../assets/img/logo.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  methods: {
    // 前往 工作台
    toWorkFun() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  width: auto;
  min-width: 1170px;
  padding: 15px 0;
  background: #ffffff;
  margin: 0 auto;
  line-height: 0;
  .logo-box {
    margin: 0 auto;
    min-width: 1170px;
    padding: 0 30px;
    img {
      width: 98px;
      height: 28px;
    }
  }
}
</style>
