module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
            plugins: (loader) => [
              require('postcss-import')({ root: loader.resourcePath }),
              require('postcss-cssnext')(),
              require('postcss-scss')(),
              require('autoprefixer')(),
              require('cssnano')()
            ]
          },
          'postcss-loader'
        ]
      }
    }
  }
}
