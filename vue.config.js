const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Configuración del servidor de desarrollo
  devServer: {
    port: 8080,
    open: true,
    hot: true
  },
  
  // Configuración de build
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  },
  
  // Configuración de CSS
  css: {
    loaderOptions: {
      css: {
        // Opciones para CSS
      }
    }
  },
  
  // Configuración de PWA (futuro)
  pwa: {
    name: 'Cry Love Cry Blog',
    themeColor: '#8b4513',
    msTileColor: '#8b4513',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
})
