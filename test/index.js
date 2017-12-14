let assert = require('assert');
let util = require('../');

describe('test parseJSON', function() {
	it('parse a {not JSON} value should return itself', function() {
		let str = 'not json';
		let parsedStr = util.parseJSON(str);
		assert.equal(str, parsedStr);
	})
	it('parse a {JSON} value should an object', function() {
		let baseObject = {
			num: 2,
			str: 'string',
			boolean: false,
			date: new Date()
		};
		let str = JSON.stringify(baseObject)
		let parsedObject = util.parseJSON(str);
		let keys = Object.keys(baseObject);
		keys.forEach(function(key) {
			if (key = 'date') {
				assert.equal(baseObject[key].getTime(), new Date(parsedObject[key]).getTime())
			} else {
				assert.equal(baseObject[key], parsedObject[key])
			}
		});
	})
})

describe('test parseNum', function() {
	it('parse a {like Number} string should return a Number value', function() {
		let str = '10';
		let num = util.parseNumber(str);
		assert.strictEqual(+str, num);
	})
	it('parse a {not Number} string should return default number', function() {
		let str = 'a';
		let defaultNum = 10;
		let num = util.parseNumber(str, defaultNum);
		assert.strictEqual(num, defaultNum);
	})
	it('parse a {not Number} string and not send default number should return 0', function() {
		let str = 'a';
		assert.strictEqual(util.parseNumber(str), 0);
	})
})

describe('test parseUrl', function() {
	it('parse a url without protocol should return a url string with http protocol', function() {
		let url = '127.0.0.1';
		url = util.parseUrl(url);
		assert.notEqual(~url.indexOf('http'), 0);
	})
	it('parse a url with protocol should retur itself', function() {
		let url = 'http://127.0.0.1';
		let parseUrl = util.parseUrl(url);
		assert.equal(url, parseUrl);
	})
})