module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@services": "./src/services",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@assets": "./src/assets",
            "@util": "./src/util",
            "@hooks": "./src/hooks",
            "@theme": "./src/theme",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
