<template>
  <div class="introduce-box">
    <div class="introduce-avatar">
      <img
        src="http://image.yy.com/yywebalbumbs2bucket/144152f8680f421599233c6ffcfcef49_1476265267104.jpeg"
        alt
      />
    </div>
    <div class="introduce-name">
      木子亮
    </div>
    <div class="introduce-des">
       WEB和移动前端开发 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.introduce-box {
  border-radius: 3px;
  padding: 10px 10px 20px 10px;
  border: 1px solid #eee;
  background: #fff;
  .introduce-avatar {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      box-shadow: 0 0 10px 1px #ccc;
    }
  }
  .introduce-name {
    width: 100%;
    font-size: 20px;
    padding: 10px 0;
    text-align: center;
    color: @globalColor;
  }
  .introduce-des {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
}
</style>