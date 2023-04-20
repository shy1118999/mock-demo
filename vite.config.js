import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'

export default ({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        enable: true,
        mockPath: 'mock',
      }),
    ],
  }
}