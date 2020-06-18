<template>
  <div class="container">
    <el-row :gutter="24">
      <el-col :md="18" :sm="24">
        <div class="main-left">
          <div class="main-title">最新日志</div>
          <index-list />
          <index-list />
          <index-list />
          <index-list />
          <index-list />
          <index-list />
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
  components: {
    IndexList,
    IndexIntroduce
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
</style>