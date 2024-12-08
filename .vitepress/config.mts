import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tutorial Vitepress",
  description: "This is an example tutorial. You can use this file as a template to create your own tutorials",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Blogs', link: '/blogs' }
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: '/blogs/',
        useTitleFromFrontmatter: true,
        resolvePath: '/blogs/',
      },
      {
        documentRootPath: '/',
        useTitleFromFrontmatter: true,
        resolvePath: '/',
      }
    ]),
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/example' },
      { icon: 'instagram', link: 'https://www.instagram.com/example' },
      { icon: 'github', link: 'https://www.github.com/example' }
    ]
  }
})