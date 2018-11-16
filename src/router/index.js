import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/HomeView'
import LookupView from '../components/LookupView'
import NewsView from '../components/NewsView'
import MyView from '../components/MyView'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', component: HomeView},
    {path: '/news', component: NewsView},
    {path: '/lookup', component: LookupView},
    {path: '/my', component: MyView}
  ],
  linkActiveClass: 'active'
})
