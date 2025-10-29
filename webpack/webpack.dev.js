import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true, // Added this line
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // Added this line
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('In Development'),
    }),
  ],
};
