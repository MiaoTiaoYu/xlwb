<template>
  <div id="app">
    <head-view class="head"></head-view>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/home">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/news">消息</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/lookup">发现</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/my">个人</router-link>
      </div>
    </div>
    <router-view :news="news"></router-view>
  </div>
</template>

<script>
  import HeadView from './components/HeadView'
  export default {
    name: 'App',
    data() {
      return {
        news: []
      }
    },
    created() {
      this.axios.get('/api/news')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.news = res.data
          }
        })
    },
    components: {
      HeadView
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "./public/scss/mixin"
  #app
    .head
      width: 100%
      height: 38px
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      background: rgb(240, 239, 246)
      @include border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 101, 13)
            border-bottom: 1px solid rgb(240, 101, 13)
</style>
