<template>
  <div class="container">
    <!-- <div class="article" v-html="articleContent"></div> -->
    {{ articleData.content }}daa
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  data() {
    return {
      articleContent: "暗色调"
    };
  },
  async asyncData({ params, error, $axios }) {
    try {
      const res = await $axios.post("/api/v1/article/find", {
        id: params.id
      });
      return { articleData: res.data.data };
    } catch (err) {
      error({ data: err });
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.article {
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}
</style>