const tsLoader = require('./config/ts-loader')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~assets/css/main.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Add Nuxt Plugins
   */
  plugins: [
    "~/plugins/uix",
  ],
  /*
   ** Add axios globally
   */
  build: {
    vendor: [
      'axios',
      'uiv'
    ],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
        tsLoader(config);
      }
    }
  },
  cache: true,
  srcDir: 'client/',
  router: {
    middleware: 'auth'
  },
  modules: ["nuxt-typescript"],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
