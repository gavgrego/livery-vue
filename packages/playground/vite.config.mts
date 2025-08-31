import { relative, sep as pathSeparator } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

const librarySrc = fileURLToPath(new URL('../livery-vue/src/', import.meta.url))
const playgroundSrc = fileURLToPath(new URL('./src/', import.meta.url))

export default defineConfig(({ mode }): UserConfig => ({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools()
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: '@',
        customResolver(source, importer, options) {
          let target = playgroundSrc

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
}))
