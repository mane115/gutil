'use strict'
module.exports = {
	/**
	 * safe json parser
	 * @param  {String} str string ready to parse
	 * @return {Object || any}     if str is a JSON,return Object,else return itself
	 */
	json: function(str) {
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
	number: function(num, defaultValue) {
		if (!defaultValue) defaultValue = 0;
		num = +num;
		return isNaN(num) ? defaultValue : num;
	},

	/**
	 * a protocol checker
	 * @param  {String} url      url string to be check
	 * @param  {String} protocol url protocol
	 * @return {String}          url with protocol
	 */
	url: function(url, protocol) {
		if (!protocol) protocol = 'http';
		if (!~protocol.indexOf('://')) {
			protocol += '://'
		}
		return ~url.indexOf(protocol) ? url : protocol + url;
	},
}