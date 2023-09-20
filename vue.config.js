const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('require-context')
//       .test(/\.js$/)
//       .use('require-context-loader')
//         .loader('require-context-loader')
//         .end();
//   }
// };


// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: config => {
//     config.module
//       .rule('require-context')
//       .test(/\.js$/)
//       .use('require-context-loader')
//         .loader('require-context-loader')
//         .end();
//   }
// });
