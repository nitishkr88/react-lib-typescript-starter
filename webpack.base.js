var webpack = require('webpack')
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = options => {
  return {
    mode: options.mode,
    output: {
      library: 'reactLibTypescriptStarter',
      libraryTarget: 'umd'
    },
    optimization: options.optimization,
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          // preprocess our own .css files
          test: /\.(le|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: 'file-loader'
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                // inline files smaller than 10 kB
                limit: 10 * 1024,
                noquotes: true
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                // inline files smaller than 10 kB
                limit: 10 * 1024
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  enabled: false
                  // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                  // Try enabling it in your environment by switching the config to:
                  // enabled: true,
                  // progressive: true,
                },
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                }
              }
            }
          ]
        }
      ]
    },
    plugins: options.plugins.concat([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
    ]),
    resolve: {
      ...(options.resolve && options.resolve),
      modules: ['node_modules', 'app'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['browser', 'jsnext:main', 'main']
    },
    devtool: options.devtool,
    target: 'web',
    performance: options.performance || {},
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes'
    }
  }
}
