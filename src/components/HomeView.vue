<template>
  <div class="home">
    <div class="home-head">
      <div class="box" ref="home">
        <ul class="head-ul">
          <li v-for="(item,index) in news" :key="index" class="head-li border-1px">
            <div class="head-avatar">
              <img :src="item.avatar">
            </div>
            <h2 class="head-h2">{{item.username}}</h2>
            <div class="head-span">
              <span>{{item.rateTime | time}}</span>
              <span> 来自 微博 weibo.com</span>
            </div>
            <p>{{item.text}}</p>
            <div class="head-picture">
              <img :src="item.picture">
            </div>
            <div class="home-bottom">
              <span class="icon-forward"><i>{{item.forwardingNumber}}</i></span>
              <span class="icon-comment"><i>{{item.commentsNumber}}</i></span>
              <span class="icon-like"><i>{{item.pointPraise}}</i></span>
            </div>
          </li>
        </ul>
      </div>
      <i class="icon-refresh"></i>
    </div>
  </div>
</template>

<script>
  import {filterCustomDate} from '../public/js/tools'
  import BScroll from 'better-scroll'
  export default {
    name: 'HomeView',
    props: {
      news: {
        type: Array,
        require: true
      }
    },
    created() {
      this.$nextTick(() => {
        this.ratingScroll = new BScroll(this.$refs.home, {
          click: true
        })
      })
    },
    data() {
      return {
        btnShow: false
      }
    },
    filters: {
      time(date) {
        return filterCustomDate(date)
      }
    },
    methods: {
      showBtn() {
        document.onmousewheel = function (e) {
          e = e || window.event
          var wheelDelta = e.wheelDelta
          console.log(wheelDelta)
          if (wheelDelta > 0) {
            this.btnShow = false
          } else {
            this.btnShow = true
          }
        }
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/mixin"
  .home-head
    margin: 10px
    .box
      position: fixed
      width: 100%
      height: 580px
      overflow: hidden
      .head-li
        position: relative
        margin-bottom: 36px
        padding-bottom: 18px
        @include border-1px(rgba(7, 17, 27, 0.1))
        .head-avatar > img
          width: 50px
          height: 50px
          border-radius: 50%
        h2
          position: absolute
          left: 56px
          top: 7px
          display: inline-block
          font-size: 18px
        .head-span
          position: absolute
          left: 56px
          top: 28px
          display: inline-block
          font-size: 12px
        p
          margin: 15px 10px 10px 0
          text-align: left
          line-height: 22px
        .head-picture > img
          max-width: 347px
        .home-bottom
          margin-top: 15px
        .home-bottom > span
          margin-right: 40px
          font-size: 20px
        .home-bottom > span > i
          font-size: 15px
    .icon-refresh
      position: fixed
      right: 15px
      bottom: 56px
      width: 55px
      height: 55px
      text-align: center
      line-height: 55px
      color: #0A74DA
      font-size: 38px
      font-weight: 800
      background: #fff
      border-radius: 50%
</style>
