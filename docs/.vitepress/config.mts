import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "front-end study",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '工程化',
        items: [
          {text: 'webpack', link:'/engineering/wewbpack'}
        ]
      }
    ],

    sidebar: [
      { text: '工程化',
      items: [
        {text: 'webpack', link:'/engineering/webpack'}
      ]
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
