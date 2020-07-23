module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            api: './src/api',
            config: './src/config',
            services: './src/services',
            ui: './src/ui'
          }
        }
      ]
    ]
  }
}
