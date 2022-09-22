const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
};

console.log(mode + ' mode');

module.exports = {
  mode: mode,
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      favicon: 'src/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'emailSent.html',
      template: 'src/emailSent.pug',
      favicon: 'src/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'telhados.html',
      template: 'src/telhados.pug',
      favicon: 'src/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'banheiros.html',
      template: 'src/banheiros.pug',
      favicon: 'src/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'impermeabilizacoes.html',
      template: 'src/impermeabilizacoes.pug',
      favicon: 'src/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'pinturas.html',
      template: 'src/pinturas.pug',
      favicon: 'src/favicon.ico',
    }),
  ],
  devServer: {
    static: './src/index.pug',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    //'postcss-preset-env',
                    require('postcss-preset-env')({
                      browsers: [
                        "last 2 versions",
                        "> 1%",
                        "IE 10"
                      ]
                    })
                    //{
                    //Options
                    // }
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/i,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}