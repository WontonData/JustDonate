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
          component: Data
        },
        {
          path: '/donation',
          component: Donation,

        },
        {
          path: '/demand',
          component: Demand,
        },
        {
          path: '/vote',
          component: Vote,
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/upload',
          component: IpfsInfo
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
          component: PerDon
        },
        {
          path: '/perfile/demand',
          component: PerDem
        },
      ]
    }
  ]
})
