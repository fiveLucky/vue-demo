module.exports = {
  "presets": [
    "@babel/preset-env",
    '@vue/app'
  ],
  "plugins": [
    [
      "@babel/transform-runtime",
      {
        "helper": false,
        "module-name": "@babel/runtime"
      },
    ],
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}