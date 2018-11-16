<template>
  <div class="lookup">
    <div class="lookup-inp">
      <i class="icon icon-search"></i>
      <input type="search" class="inp" placeholder="大家都在搜：谭维维吉克隽逸点赞黑评">
    </div>
    <div class="lookup-text">
      <div class="text-div">
        <h4>哈文朋友圈</h4>
        <img src="../public/img/xin.png">
      </div>
      <div class="text-div text-h">
        <h4>李云迪删博</h4>
        <img src="../public/img/hot.png">
      </div>
      <div class="text-div">
        <h4>唐嫣罗晋婚礼主持</h4>
        <img src="../public/img/hot.png">
      </div>
      <div class="text-div text-h">
        <h4>杨洋铂金全新大片</h4>
        <img src="../public/img/jian.png">
      </div>
      <div class="text-div">
        <h4>钱小佳 斗鱼</h4>
      </div>
      <div class="text-div text-h">
        <h4>罗云熙 偶像运动季</h4>
      </div>
      <div class="text-div text-none">
        <h4>潜水员进入坠江公交车</h4>
        <img src="../public/img/xin.png">
      </div>
      <div class="text-div text-h text-none">
        <h4>微博热搜榜</h4>
        <img src="../public/img/right.png">
      </div>
    </div>
    <div class="lookup-choice">
      <div class="choice">
        <img src="../public/img/find.png">
        <span>找人</span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="choice">
        <img src="../public/img/tongcheng.png">
        <span>同城</span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="choice">
        <img src="../public/img/game.png">
        <span>游戏</span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="choice">
        <img src="../public/img/live.png">
        <span>直播</span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="choice">
        <img src="../public/img/nba.png">
        <span>赛事</span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="choice">
        <img src="../public/img/movie.png">
        <span>电影</span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="choice">
        <img src="../public/img/city.png">
        <span>美食</span>
        <i class="icon-right-arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'LookupView'
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/mixin"
  .lookup-inp
    position: relative
    margin: 5px auto
    width: 340px
    height: 30px
    border-radius: 10px
    background-color: #e3e4e6
    .inp
      position: absolute
      right: 0
      top: 0
      width: 310px
      height: 28px
      border: 0 none
      outline: none
      font-size: 15px
      background: transparent
    .icon
      display: inline-block
      margin-left: 7px
      line-height: 30px

  .lookup-text
    box-sizing: border-box
    display: inline-block
    width: 100%
    height: 190px
    border-top: 2px solid #ccc
    border-bottom: 1px solid #ccc
    img
      margin-bottom: 15px
      align-items: center
      width: 14px
      height: 14px
    h4
      padding-right: 0
      padding-left: 15px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      max-width: 145px
      height: 44px
      line-height: 44px
    .text-div
      display: inline-block
      text-align: left
      width: 49%
      border-bottom: 1px solid #ccc
      border-right: 1px solid #ccc
    .text-h
      border-right: none
    img, h4
      display: inline-block
    .text-none
      border-bottom: none
  .lookup-choice
    margin: 5px 0
    .choice
      position: relative
      height: 40px
      margin-bottom: 2px
      border-radius: 20px
      background: #e8e8e8
      &:hover
        background: #b3b3b3
    img
      position: absolute
      left: 2px
      top: 3px
      width: 36px
      height: 36px
    span
      position: absolute
      left: 45px
      top: 14px
      display: inline-block
    .icon-right-arrow
      position: absolute
      right: -8px
      top: 0
      font-size: 40px
      font-weight: 700
      color: #b3b3b3
</style>
