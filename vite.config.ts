import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| https://vitejs.dev/config/
|
*/

export default defineConfig({
  base: '/fashionhub-sidebar-navigation/',
  plugins: [
    react(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[name]', // icon-[dir]-[name]

      /**
       * custom insert position
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    }),
  ]
})
