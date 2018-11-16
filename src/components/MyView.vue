<template>
  <div class="my-view">
    <div class="my-head">
      <img src="../public/img/touxiang.jpg">
      <div class="my-head-center">
        <h2>匹诺曹99393</h2>
        <span>简介: 啦啦啦啦</span>
      </div>
      <div class="my-head-icon">
        <span class="icon-crown"></span>
        <i class="icon-right-arrow"></i>
      </div>
      <div class="my-head-right">
        <i class="icon-right-arrow"></i>
      </div>
    </div>
    <div class="my-text">
      <span class="block">
        <i>999</i>
        <b>微博</b>
      </span>
      <span class="block">
        <i>999</i>
        <b>关注</b>
      </span>
      <span class="block none">
        <i>999</i>
        <b>粉丝</b>
      </span>
    </div>
    <div class="my-nav">

    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .my-view
    width: 100%
    height: 100%
    .my-head
      display: flex
      text-overflow: ellipsis
      white-space: nowrap
      padding-bottom: 5px
      margin: 10px 10px
      background: #fff
      img
        display: inline-block
        width: 80px
        height: 80px
        border-radius: 50%
      .my-head-center > h2
        margin: 15px 10px
        font-size: 20px
      .my-head-center > span
        margin-left: 12px
        color: #919191
      .my-head-icon
        margin-top: 12px
        width: 42px
        height: 25px
        line-height: 24px
        font-size: 18px
        border-radius: 8px
        color: #94949a
        background: #f0eff6
      .my-head-right
        text-align: right
        margin-top: 28px
        margin-left: 56px
        font-size: 25px
        color: #94949a
    .my-text
      display: flex
      padding: 10px 0
      width: 100%
      border-top: 1px solid #94949a
      border-bottom: 1px solid #94949a
      .block
        display: block
        width: 30%
        margin: 2px 6px
        text-align: center
        border-right: 1px solid #94949a
        &:last-child
          border-right: none
        i, b
          display: block
      .block > i
        font-size: 16px
      .block > b
        font-size: 18px
</style>
