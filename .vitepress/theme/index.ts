// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './styles/vars.css'
import './styles/output.css'

import Banner from './theme-components/Banner.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-top': () => h(Banner), 
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme