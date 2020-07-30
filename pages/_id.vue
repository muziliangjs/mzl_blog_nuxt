<template>
  <div class="container">
    <el-row :gutter="24"> 
      <el-col :md="18" :sm="24">
        <div class="main-left">
          <div class="main-title">最新</div>
          <div v-for="item in articleList" :key="item.id">
            <index-list :item="item" />
          </div>
          <div
            class="articleData-list"
            v-if="articleList.length == 0 || articleList.length == count"
          >{{ articleList.length > 0 ?'- 到底了 -':'空空入也~' }}</div>
        </div>
      </el-col>
      <el-col :md="6" class="hidden-sm-and-down" style="padding-left: 0">
        <index-introduce />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IndexList from "~/components/index/IndexList.vue";
import IndexIntroduce from "~/components/index/IndexIntroduce.vue";

export default {
  head() {
    return {};
  },
  data() {
    return {
      page: 1,
      lastPage: true,
      initialValue: "11" //markdown默认值
    };
  }, 
  async asyncData({ params, error, $axios }) {
    try {
      const res = await $axios.post("/api/v1/article", { label_id: params.id });
      return { articleList: res.data.data.list, count: res.data.data.count };
    } catch (err) {
      error({ data: err });
    }
  },
  components: {
    IndexList,
    IndexIntroduce
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    nextPage() {
      if (this.lastPage) {
        this.lastPage = false;
        const label_id = this.$route.params.id;
        this.page++;
        this.$axios
          .post("/api/v1/article", { label_id, page: this.page })
          .then(res => {
            const { data } = res.data;
            this.articleList = [...this.articleList, ...data.list];
            this.lastPage = this.articleList.length < data.count ? true : false;
          });
      }
    },
    handleScroll() {
      let jrscrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollT;
      let scrollBottom =
        document.body.clientHeight - window.innerHeight - jrscrollTop;
      if (scrollBottom < 10) {
        this.nextPage();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.main-left {
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 0 3px;
  border-radius: 3px;
  .main-title {
    font-size: 16px;
    padding: 15px 20px;
    color: #444444;
    border-bottom: 1px solid #eee;
  }
}
.articleData-list {
  width: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 12px;
  color: #cccccc;
}
</style>