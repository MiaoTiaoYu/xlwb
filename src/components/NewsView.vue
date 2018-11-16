<template>
  <div class="news">
    <div class="news-tab">
      <div class="tab-content">
        <div class="tab-head" style="background: steelblue">
          <i class="icon-at"></i>
        </div>
        <span class="tab-text">@我的</span>
        <i class="icon-right-arrow"></i>
      </div>
    </div>
    <div class="news-tab">
      <div class="tab-content">
        <div class="tab-head" style="background: lightseagreen">
          <i class="icon-comment"></i>
        </div>
        <span class="tab-text">评论</span>
        <i class="icon-right-arrow"></i>
      </div>
    </div>
    <div class="news-tab">
      <div class="tab-content">
        <div class="tab-head" style="background: orange">
          <i class="icon-like"></i>
        </div>
        <span class="tab-text">赞</span>
        <i class="icon-right-arrow"></i>
      </div>
    </div>
    <div class="news-tab">
      <div class="tab-content">
        <div class="tab-head" style="background: lightseagreen">
          <i class="icon-speaker"></i>
        </div>
        <span class="tab-text">未关注人私信</span>
        <i class="icon-right-arrow"></i>
      </div>
    </div>
    <div class="news-tab">
      <div class="head">
        <img src="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsView',
    data() {
      return {
        texts: []
      }
    },
    created() {
      this.axios.get('/api/texts')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.texts = res.data
          }
        })
    }
      }

</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/mixin"
  .news
    margin-top: 5px
    .news-tab
      width: 100%
      height: 70px
      @include border-1px(rgba(7, 17, 27, 0.1))
      background: #fff
      .tab-content
        display: flex
        line-height: 70px
        .tab-head
          margin: 7px 0 5px 8px
          width: 54px
          height: 54px
          text-align: center
          line-height: 54px
          font-size: 40px
          font-weight: 200
          color: #fff
        .tab-text
          margin-left: 10px
          font-size: 19px
        .icon-right-arrow
          position: absolute
          right: 0
          top: 25px
          font-size: 22px
          font-weight: 200
</style>
