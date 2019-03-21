var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


//在express中加载webpack模块
var webpack = require('webpack');
//webpack的配置文件  设置webpack.config.js路径
var webpackConfig = require('./client/webpack.config');
//启动webpack的方法webpack(配置文件对象，回调)
var compiler = webpack(webpackConfig,function(err,stats){
    //我们可以在stats中看到webpack打包的过程与命令行执行的结果是一样的
    console.log(stats.toString({
        colors:true
    }));
    //通过compiler对象可以开启watch模式来监听原文件的变化，如果原文件发生改变就会
    //出发webpack的重新打包回调函数内部与打包函数是一样的
    compiler.watch({
        aggregateTimeout: 300,
        poll: undefined
    },function(err,stats){

    })
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');//引擎模板为ejs
//app.set('view engine', 'jade');//引擎模板为jade

//设置引擎模板为html   设置index.html的路径
app.set('views', './client/view');
app.engine('html',ejs.__express);
app.set('view engine','html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//配置静态资源 设置为打包后的路径 如果前面设置调用路径，那么在html引用的时候也需要加上设置的调用路径才ok
//可以在html页面上直接访问任何静态资源
//  app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

//会导致html无法直接访问静态资源，比如图片加载，就需要放到react组件中去才能显示 同时直接调用打包后的index.bundle.js文件
app.use(express.static(path.join(__dirname, 'client/static/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
