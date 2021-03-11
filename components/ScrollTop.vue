<template>
  <div v-if="isShow" class="scroll-top" @click="toTop()"></div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.pageScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.pageScroll);
  },
  methods: {
    pageScroll() {
      let jrscrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollT;
      this.isShow = jrscrollTop > 200 ? true : false;
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
};
</script>

<style lang="less" scoped>
.scroll-top {
  position: fixed;
  z-index: 9;
  right: 30px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: url("../assets/images/top.png");
}
</style>