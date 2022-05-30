import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
const path = require('path')

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers:[AntDesignVueResolver()]
        })
    ],
    // 配置别名
    resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, 'src')
          }
        ]
    },
    server: {
        //服务器主机名
        host: '0.0.0.0',
        //端口号
        port: 3099,
        //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
        open: false
    }
})
