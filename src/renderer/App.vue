<template>
  <div id="app">
    <Header v-if="this.$route.path != '/404'"/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 0.25s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.25s;
  }
}
</style>
