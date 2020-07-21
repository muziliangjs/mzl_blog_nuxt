<template>
  <div class="header">
    <div class="header-center">
      <NLink to="/">
        <div class="logo">木子亮</div>
      </NLink>
      <div class="nav">
        <ul>
          <li>
            <NLink to="/">首页</NLink>
          </li>
          <li>
            <NLink to="/label">分类</NLink>
          </li>
          <!-- <li>
            <NLink to="/about">标签</NLink>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader"
};
</script>

<style lang="less" scoped>
.header {
  padding: 10px;
  background: #ffffff;
  border-bottom: 1px solid #eee;
  .header-center {
    max-width: 1100px;
    margin: 0 auto;
    overflow: hidden;
    .logo {
      float: left;
      font-size: 20px;
      line-height: 30px;
      color: @globalColor;
    }
    .nav {
      float: right;
      ul {
        li {
          width: 80px;
          text-align: center;
          float: left;
          color: #666666;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>