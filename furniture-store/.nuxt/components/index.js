export const BlogItem = () => import('../..\\components\\blogItem.vue' /* webpackChunkName: "components/blog-item" */).then(c => wrapFunctional(c.default || c))
export const BlogLg = () => import('../..\\components\\blogLg.vue' /* webpackChunkName: "components/blog-lg" */).then(c => wrapFunctional(c.default || c))
export const Carousel = () => import('../..\\components\\carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const MiniCart = () => import('../..\\components\\miniCart.vue' /* webpackChunkName: "components/mini-cart" */).then(c => wrapFunctional(c.default || c))
export const Nav = () => import('../..\\components\\nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const NotificationList = () => import('../..\\components\\notificationList.vue' /* webpackChunkName: "components/notification-list" */).then(c => wrapFunctional(c.default || c))
export const NotificationMessage = () => import('../..\\components\\notificationMessage.vue' /* webpackChunkName: "components/notification-message" */).then(c => wrapFunctional(c.default || c))
export const Preloader = () => import('../..\\components\\preloader.vue' /* webpackChunkName: "components/preloader" */).then(c => wrapFunctional(c.default || c))
export const Product = () => import('../..\\components\\product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const ProductCheckout = () => import('../..\\components\\productCheckout.vue' /* webpackChunkName: "components/product-checkout" */).then(c => wrapFunctional(c.default || c))
export const Testimonials = () => import('../..\\components\\testimonials.vue' /* webpackChunkName: "components/testimonials" */).then(c => wrapFunctional(c.default || c))
export const WeekCard = () => import('../..\\components\\weekCard.vue' /* webpackChunkName: "components/week-card" */).then(c => wrapFunctional(c.default || c))
export const WeekGroup = () => import('../..\\components\\weekGroup.vue' /* webpackChunkName: "components/week-group" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
