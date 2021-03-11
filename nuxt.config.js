export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: '木子亮-专注前端开发',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        // content: process.env.npm_package_description || '专注web前端和移动端开发'
        content: '专注web前端和移动端开发'
      },
      {
        hid: 'keywords',
        name: 'keywords', 
        content: '木子亮,专注前端开发,专注web前端和移动端开发'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    {
      src: 'assets/css/common.less',
      lang: 'less'
    },
    {
      src: 'assets/css/global.less',
      lang: 'less'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/plugins/v-md-editor',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  // less
  styleResources: {
    less: './assets/**/*.less'
    // sass: ...
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true, // 表示开启代理 
    credentials: true // 表示跨域请求时是否需要使用凭证
  },

  proxy: {
    '/api': {
      target: 'http://localhost:8888', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '', // 把 /api 替换成‘’
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
