<template>
  <div class="container">
    <el-row :gutter="24">
      <el-col :md="16" :sm="24">
        <index-list />
      </el-col>
      <el-col :md="8" class="hidden-sm-and-down">
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

<style lang="less">
</style>