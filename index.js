/**
 * util 为了兼容较旧的node版本: >= 4.6.0(支持promise)，所以大部分使用es5语法编写
 */
'use strict'
let util = {
	parse: require('./lib/parse'),
}

// if runtime is node, promisify fs and export util 
if (process && process.title === 'node' && require) {
	let Promise = require('bluebird');
	util.fs = Promise.promisifyAll(require('fs'));
	util.Http = require('ghttp');
}
if (module && module.exports) {
	return module.exports = util;
}