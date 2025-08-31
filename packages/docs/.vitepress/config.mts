import { relative, sep as pathSeparator } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfigWithTheme } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

const librarySrc = fileURLToPath(new URL('../../livery-vue/src/', import.meta.url))
const docsSrc = fileURLToPath(new URL('../src/', import.meta.url))

export default ({ mode }: { mode: string }) => defineConfigWithTheme({
  srcDir: './src',
  outDir: './dist',
  base: '/',
  title: '@gavgrego/livery-vue',
  lang: 'en-US',
  description: 'Description',
  cleanUrls: true,

  vite: {
    plugins: [
      tailwindcss()
    ],

    resolve: {
      alias: [
        {
          find: '@',
          replacement: '@',
          customResolver(source, importer, options) {
            let target = docsSrc

            // If the importer is inside librarySrc we resolve @ to that path
            if (importer && relative(importer, librarySrc).split(pathSeparator).every(p => p === '..')) {
              target = librarySrc
            }

            const filePath = source.replace(/^@\//, target)

            return this.resolve(filePath, importer, options)
          }
        }, {
          find: '@gavgrego/livery-vue',
          replacement: librarySrc
        }
      ]
    },

    define: {
      __DEV__: mode !== 'production'
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/introduction' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gavgrego/livery-vue' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          {
            text: 'Introduction',
            link: '/introduction'
          }
        ]
      }
    ]
  }
})
