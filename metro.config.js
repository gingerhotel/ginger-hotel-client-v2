const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
/** @type {import('expo/metro-config').MetroConfig} */
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname,{
    isCSSEnabled: true,
  });
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      //babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json', 'mjs'] //add here
    },
  };
})();

