const webpack = require('webpack');
const Extr = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry:{
        bundle: './src/main.js'
    },
    output:{
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    devtool:'cheap-eval-source-map',
    plugins:[
        /* new Extr('index.css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('common'),
        new UglifyPlugin(), */
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
		extensions:['.js','.vue','.css'],
		alias:{
			"vue": "vue/dist/vue.js"
		}
	},
    devServer:{
		compress: true,
		port: 9000,
		open:true,
		hot:true
	}
}