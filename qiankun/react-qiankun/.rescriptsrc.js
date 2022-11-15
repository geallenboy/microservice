const { name } = require('./package');

module.exports = {
  webpack:(config, env) =>{

    config.entry = [config.entry].filter(
      (e) => !e.includes('webpackHotDevClient')
    );
    config.output.library = `reactApp`;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_reactApp`;
    // config.output.globalObject = 'window';
    // config.output.publicPath= `http://127.0.0.1:1026/`
    return config;
  },
  devServer: (_) => {
    const config = _;
    config.port=1024;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    // config.historyApiFallback = true;
    // config.hot = false;
    // config.watchContentBase = false;
    // config.liveReload = false;

    return config;
  },
};