import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/index/Index";
import Data from "@/views/data/Data";
import Donation from "@/views/donation/Donation";
import Demand from "@/views/demand/Demand";
import About from "@/views/about/About";
import Perfile from "@/views/perfile/Perfile";
import PerDon from "@/views/perfile/child/PerDon";
import PerDem from "@/views/perfile/child/PerDem";
import Vote from "@/views/vote/Vote";
import IpfsInfo from "./views/ipfs/IpfsInfo";


Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/',
          redirect: '/data',
        },
        {
          path: '/data',
          component: Data,
          meta: {
            title: "首页"
          },
        },
        {
          path: '/donation',
          component: Donation,
          meta: {
            title: "捐赠动态"
          },

        },
        {
          path: '/demand',
          component: Demand,
          meta: {
            title: "需求动态"
          },
        },
        {
          path: '/vote',
          component: Vote,
          meta: {
            title: "投票表决"
          },
        },
        {
          path: '/about',
          component: About,
          meta: {
            title: "关于我们"
          },
        },
        {
          path: '/upload',
          component: IpfsInfo,

        }
      ]
    },
    {
      path: '/perfile',
      component: Perfile,
      children: [
        {
          path: '/',
          redirect: '/perfile/donation',
        },
        {
          path: '/perfile/donation',
          component: PerDon,
          meta: {
            title: "我的捐赠"
          },
        },
        {
          path: '/perfile/demand',
          component: PerDem,
          meta: {
            title: "我的需求"
          },
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
// router.beforeEach((to, from, next) => {
//   // 如果有token 说明该用户已登陆
//   // if (localStorage.getItem('token')) {
//   //   // 在已登陆的情况下访问登陆页会重定向到首页
//   //   if (to.path === '/login') {
//   //     next({path: '/'})
//   //   } else {
//   //     next({path: to.path || '/'})
//   //   }
//   // } else {
//   //   // 没有登陆则访问任何页面都重定向到登陆页
//   //   if (to.path === '/login') {
//   //     next()
//   //   } else {
//   //     next(`/login?redirect=${to.path}`)
//   //   }
//   // }
// })

export default router
