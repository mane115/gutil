/**
 * util 为了兼容较旧的node版本: >= 4.6.0(支持promise)，所以大部分使用es5语法编写
 */
'use strict'

let util = {
	/**
	 * safe json parser
	 * @param  {String} str string ready to parse
	 * @return {Object || any}     if str is a JSON,return Object,else return itself
	 */
	parseJSON: function(str) {
		try {
			str = JSON.parse(str);
		} finally {
			return str;
		}
	},

	/**
	 * num parser
	 * @param  {Any} num          value ready to be parse to number
	 * @param  {Number} defaultValue if parse fail,return default value, default to 0
	 * @return {Number}              parse result
	 */
	parseNumber: function(num, defaultValue) {
		if(!defaultValue) defaultValue = 0;
		num = +num;
		return isNaN(num) ? defaultValue : num;
	},

	parseUrl: function(url) {
		return ~url.indexOf('http://') ? url : 'http://' + url;
	},
};
util.Http = require('ghttp');
module.exports = util