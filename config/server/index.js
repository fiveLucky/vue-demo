const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const path = require('path');

const devConfig = require('../webpack/dev.config')


const app = new Koa();

const compiler = webpack(devConfig);

koaWebpack({
  compiler,
  hotClient: {},
}).then((middleware) => {
  app.use(middleware);
  app.use(async ctx => {
    const filename = path.resolve(devConfig.output.path, 'index.html');
    ctx.response.type = 'html';
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
  });
})






app.listen('6000', () => {
  console.log('sever start at port 6000')
})