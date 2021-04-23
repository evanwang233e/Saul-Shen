var webpack =require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');

//dev
var config = {
  debug: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    })
  ]
};

if (process.env.NODE_ENV === 'pro') { //pro
  config.debug = false;
  config.watch = false;
  config.devtool = 'cheap-module-source-map';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,  //no warnings
      drop_console: true  //no console
    }
  }));
}

module.exports = {
	entry: {
    main: './src/main.js' //入口
  },
	//编译打包后的输出
	output: {
		path: __dirname+'/build/',
		filename: '[name].[hash].js'
	},
  //开发环境推荐：‘cheap-module-eval-source-map’，生产环境推荐：’cheap-module-source-map’
	devtool: config.devtool,
	module: {
		loaders: [
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/, loader: 'url-loader?limit=50000'
      },
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/
      },
      {
        test: /\.vue$/, loader:'vue'
      }
		]
	},
	resolve: {
		extensions: ['','.js','.vue','html'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
	},
  debug: config.debug,
	plugins: config.plugins,
	watch: config.watch
};
