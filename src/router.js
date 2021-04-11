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

export default new Router({
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
            title: "数据中心"
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

