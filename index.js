/**
 * util 为了兼容较旧的node版本: >= 4.6.0(支持promise)，所以大部分使用es5语法编写
 */
'use strict'
let Promise = require('bluebird');
module.exports = {
	Http: require('ghttp'),
	parse: require('./lib/parse'),
	fs: Promise.promisifyAll(require('fs')),
}