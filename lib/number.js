'use strict'
let uuid = require('uuid');
let parse = require('./parse');
let randomCodeMaxLen = 10;
let randomCodeMinLen = 1;

module.exports = {
	/**
	 * get random code
	 * @param  {Number} length code length
	 * @return {String}        random code
	 */
	randomCode: function(length) {
		length = parse.number(length, 4);
		if (length > 10) {
			length = 10;
		} else if (length < 1) {
			lenght = 1;
		}
		return Math.random().toFixed(length).replace('0.', '')
	},

	/**
	 * get random uuid string
	 * @return {String} uuid string
	 */
	uuid: function() {
		return uuid.v4().split('-').join('');
	},

	/**
	 * get sort uuid sort by time
	 * @return {String} uuid string
	 */
	uuidSort: function() {
		return uuid.v1().split('-').join('');
	}
}