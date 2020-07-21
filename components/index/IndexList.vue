<template>
  <div class="index-item" @click="handleGoDetils(item.id)">
    <div class="item-title">{{ item.title }}</div>
    <div class="item-icon">
      <span>{{ item.create_time }}</span>
      <span>{{ item.label }}</span>
      <!-- <span>100</span> -->
    </div>
    <div class="item-content">{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    handleGoDetils(id) {
      this.$router.push({ path: "/article/" + id });
    }
  }
};
</script>

<style lang="less" scoped>
.index-item {
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }
  .item-title {
    color: @globalColor;
    font-size: 18px;
    line-height: 30px;
  }
  .item-icon {
    padding: 5px 0;
    span {
      display: inline-block;
      margin-right: 20px;
      font-size: 14px;
      line-height: 14px;
      color: #999;
    }
  }
  .item-content {
    font-size: 16px;
    line-height: 30px;
    color: #777;
  }
}
.item:last-child {
  border-bottom: none;
}
</style>