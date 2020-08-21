module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      veiwportHeight: 667,
      unitPrecision: 3,
      viewportUnit: 'vw',
      minPixelValue: 1, // 最小px，不进行转换
      mediaQuery: false,
      selectorBlackList: ['ignore'], //黑名单
    },
    "postcss-viewport-units":{},
    "postcss-viewport-units":{
      filterRule: rule => rule.selector.indexOf('::after')  === -1 && rule.selector.indexOf('::before')  === -1 && rule.selector.indexOf(':after')  === -1 && rule.selector.indexOf(':before')  === -1
    },
    "cssnano": { preset: "advanced", autoprefixer: false, "postcss-zindex": false },
  }
}
