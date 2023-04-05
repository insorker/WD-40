import ts from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const isDevelopment = () => {
  return process.env.NODE_ENV == 'development';
}

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    format: 'iife',
    entryFileNames: '[name].iife.js'
  },
  plugins: [
    ts(),
    resolve(),
    isDevelopment() && livereload('dist'),
    isDevelopment() && serve({
      open: true,
      port: 8020,
      openPage: '/index.html'
    })
  ]
}