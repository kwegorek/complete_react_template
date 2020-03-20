// module.exports = {
//     entry: './client/index.js', // assumes your entry point is the index.js in the root of your project folder
//     mode: 'development',
//     output: {
//         path: __dirname,
//         filename: './public/bundle.js'
//     },
//     devtool: 'source-maps',
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader'
//           }
//         }
//       ]
//     }
//   }

module.exports = {
    entry: './client/index.js', // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path:'/Users/katarzynawegorek/kwegorek/react_app_template/public', // assumes your bundle.js will also be in the root of your project folder
      filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }