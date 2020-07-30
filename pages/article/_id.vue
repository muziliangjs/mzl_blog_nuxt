<template>
  <div class="container">
    <div class="article">
      <div class="title">{{ articleData.title }}</div>
      <div class="desc">
        <span>
          <img src="~/assets/images/time.png" />
          {{ articleData.create_time }}
        </span>
        <span>
          <img src="~/assets/images/tag.png" />
          {{ articleData.label }}
        </span>
      </div>
      <client-only>
        <v-md-preview :text="content"></v-md-preview>
      </client-only>
      <!-- <markdown-preview ref="md" :initialValue="initialValue" theme="oneDark" /> -->
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
// import MarkdownPreview from "@/components/markdown/preview";

export default {
  data() {
    return {
      articleData: {},
      content: ""
    };
  },
  components: {
    // MarkdownPreview
  },
  async asyncData({ params, error, $axios }) {
    try {
      const res = await $axios.post("/api/v1/article/find", {
        id: params.id
      });
      return {
        articleData: res.data.data,
        content: res.data.data.content
      };
    } catch (err) {
      error({ data: err });
    }
  },
  mounted() {
  }
};
</script>

<style lang="less" scoped>
.article {
  background: #ffffff;
  padding: 20px 20px 30px 20px;
  box-sizing: border-box;
}
.title {
  font-size: 24px;
  color: #000000;
  width: 70%;
  margin: 0 15%;
  text-align: center;
  padding: 20px 0;
}
.desc {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #999999;
  span {
    display: inline-block;
    margin: 0 20px;
    img {
      position: relative;
      top: -1px;
      vertical-align: middle;
      display: inline-block;
      width: 16px;
      height: 16px;
    }
  }
}
</style>