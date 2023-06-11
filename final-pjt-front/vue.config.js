const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/mo_vieva_magenta',
  pwa:{
    "name":"mo_vieva_magenta",
    "short_name":"moviema",
    "theme_color":"BB2649"
  }
})
