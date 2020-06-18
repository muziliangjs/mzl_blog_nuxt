<template>
  <div class="header">
    <div class="header-center">
      <div class="logo">木子亮个人博客</div>
      <div class="nav">
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">标签</a>
          </li>
          <li>
            <a href="#">关于</a>
          </li>
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
      color: @globalcColor;
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