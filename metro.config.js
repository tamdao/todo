const { getDefaultConfig } = require('expo/metro-config')

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  const { transformer, resolver } = config

  // This config for support import svg file and use it like React component
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  }

  return config
})()
