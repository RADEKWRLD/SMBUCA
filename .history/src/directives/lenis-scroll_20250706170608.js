import lenis from '../utils/lenis'

export const lenisScroll = {
  mounted(el, binding) {
    const value = binding.value || {}
    const { offset = 0, duration, immediate = true } = value
    
    const scrollTo = () => {
      lenis.scrollTo(el, {
        offset,
        duration,
        immediate
      })
    }

    if (el._scrollHandler) {
      el.removeEventListener('click', el._scrollHandler)
    }

    el._scrollHandler = scrollTo
    el.addEventListener('click', scrollTo)
  },

  unmounted(el) {
    if (el._scrollHandler) {
      el.removeEventListener('click', el._scrollHandler)
      delete el._scrollHandler
    }
  }
} 