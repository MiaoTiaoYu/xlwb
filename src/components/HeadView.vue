<template>
  <div class="nav-top">
    <div class="left">
      <span class="icon icon-friends"></span>
    </div>
    <div class="right">
      <span class="icon-search"></span>
      <span class="icon-mail2"></span>
      <span class="icon-compose"></span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .nav-top
    position: relative
    display: inline-block
    font-size: 0
    color: #fff
    .left
      position: absolute
      display: inline-block
      top: 0
      left: 0
      .icon
        display: inline-block
        margin: 2px
        font-size: 38px
        color: #272727
    .right
      position: absolute
      margin: 8px 10px
      top: 0
      right: 0
      .icon-search
        display: inline-block
        margin-right: 15px
        font-size: 30px
        color: #272727
      .icon-mail2
        display: inline-block
        margin-right: 15px
        font-size: 30px
        color: #272727
      .icon-compose
        display: inline-block
        font-size: 30px
        color: #272727

</style>
