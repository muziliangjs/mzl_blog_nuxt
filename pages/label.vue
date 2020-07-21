<template>
  <div class="container">
    <div class="label-box">
      <div
        class="label"
        v-for="item in labelList"
        :key="item.id"
        @click="handleGoMore(item.id)"
      >{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    try {
      const res = await $axios.post("/api/v1/label");
      return { labelList: res.data.data };
    } catch (err) {
      error({ data: err });
    }
  },
  data() {
    return {};
  },
  methods: {
    handleGoMore(id) {
      this.$router.push({ path: "/" + id });
    }
  }
};
</script>

<style lang="less" scoped>
.label-box {
  background: #ffffff;
  border: 1px solid #eee;
  padding: 50px 20%;
  border-radius: 3px;
  .label {
    line-height: 30px;
    padding: 0 10px;
    margin: 0 20px;
    font-size: 16px;
    color: @globalColor;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>