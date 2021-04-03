module.exports = {
  webpack: (config, options, webpack) => {
    config.resolve.modules = ['./src', './src/core', './src/modules']
    return config
  }
}