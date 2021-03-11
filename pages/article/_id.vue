<template>
  <div class="container">
    <div
      class="article"
      :style="{ width: `${titles.length == 0 ? '100%' : '78%'}` }"
    >
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
      <div id="editor">
        <client-only>
          <v-md-preview mode="preview" :text="content"></v-md-preview>
        </client-only>
      </div>
      <!-- <markdown-preview ref="md" :initialValue="initialValue" theme="oneDark" /> -->
    </div>

    <!-- 标题 -->
    <div class="article-anchor">
      <div
        v-for="(anchor, index) in titles"
        :key="index"
        :style="{ padding: `5px 0 5px ${anchor.indent * 10}px` }"
        @click="handleAnchorClick(anchor)"
      >
        <a style="cursor: pointer">{{ anchor.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
// import MarkdownPreview from "@/components/markdown/preview";

export default {
  data() {
    return {
      articleData: {},
      content: "",
      titles: [],
      anchorTop: 0,
    };
  },
  components: {
    // MarkdownPreview
  },
  async asyncData({ params, error, $axios }) {
    try {
      const res = await $axios.post("/api/v1/article/find", {
        id: params.id,
      });
      return {
        articleData: res.data.data,
        content: res.data.data.content,
      };
    } catch (err) {
      error({ data: err });
    }
  },

  mounted() {
    setTimeout(() => {
      this.handleInitAnchor(); 
    }, 0);
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
      let anchor = document.querySelector(".article-anchor");
      if (anchor) {
        this.anchorTop =
          this.anchorTop == 0 ? anchor.offsetTop : this.anchorTop;
        if (jrscrollTop > this.anchorTop) {
          anchor.style.top = jrscrollTop - this.anchorTop + "px";
        } else {
          anchor.style.top = "0";
        }
      }
    },
    handleInitAnchor() {
      const anchors = document
        .getElementById("editor")
        .querySelectorAll(".v-md-editor-preview h1,h2,h3,h4,h5,h6");

      const titles = Array.from(anchors).filter(
        (title) => !!title.innerText.trim()
      );

      if (!titles.length) {
        this.titles = [];
        return;
      }

      // 排序存在的标签，来判断标签级别
      const hTags = Array.from(
        new Set(titles.map((title) => title.tagName))
      ).sort();

      this.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    },
    handleAnchorClick(anchor) {
      const { lineIndex } = anchor;
      const heading = document
        .getElementById("editor")
        .querySelector(`.v-md-editor-preview [data-v-md-line="${lineIndex}"]`);

      if (heading) {
        const topNum = heading.offsetTop - 20;
        document.body.scrollTop = document.documentElement.scrollTop = topNum;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  width: 78%;
  background: #ffffff;
  padding: 20px 20px 30px 20px;
  box-sizing: border-box;
  float: left;
}
.article-anchor {
  padding-top: 5px;
  position: relative;
  float: right;
  width: 20%;
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  padding-left: 2%;
  a {
    font-size: 15px;
    color: #333;
    line-height: 20px;
    font-weight: normal;
  }
  a:hover {
    color: @globalColor;
  }
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