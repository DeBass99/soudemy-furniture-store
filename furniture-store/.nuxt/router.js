import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _372376f6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _07b17e70 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _3a5ba026 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _ea46f676 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _5ecd4af5 = () => interopDefault(import('..\\pages\\blogs\\_post.vue' /* webpackChunkName: "pages/blogs/_post" */))
const _358cebe6 = () => interopDefault(import('..\\pages\\shop\\_product.vue' /* webpackChunkName: "pages/shop/_product" */))
const _56db51bb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _372376f6,
    name: "about"
  }, {
    path: "/blogs",
    component: _07b17e70,
    name: "blogs"
  }, {
    path: "/checkout",
    component: _3a5ba026,
    name: "checkout"
  }, {
    path: "/shop",
    component: _ea46f676,
    name: "shop"
  }, {
    path: "/blogs/:post",
    component: _5ecd4af5,
    name: "blogs-post"
  }, {
    path: "/shop/:product",
    component: _358cebe6,
    name: "shop-product"
  }, {
    path: "/",
    component: _56db51bb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
