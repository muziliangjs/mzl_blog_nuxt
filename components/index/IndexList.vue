<template>
  <div class="index-item">
    <div class="item-title">Taro多端统一框架基础免费教程</div>
    <div class="item-icon">
      <span>2020-01-02</span>
      <span>node</span>
      <span>100</span>
    </div>
    <div class="item-content">随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。</div>
  </div>
</template>

<script>
export default {};
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