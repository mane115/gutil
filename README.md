# gutil

util collect

* ## `util.fs`

	* #### Description

		promisify fs

	* #### Source

		```javascript
		let fs = require('fs');
		bluebird.promisifyAll('fs');
		```

	* #### Example

		```javascript
		util.fs.readFileAsync(path.resolve(__diranme, './')).then(content => {
			// => file content
		}).catch(err => {
			// => 
			readFile error 
		})
		```

* ## `util.parseJSON`

	* #### Arguments

		`str(Any)`: string ready to parse

	* #### Return

		`(Object | String)`: if str is a JSON,return Object,else return itself

	* #### Example

		```javascript
		util.parseJSON(`{"a":1}`);
		// => { a: 1 }

		util.pasrseJSON('normal string');
		// => normal string
		```

* ## `util.parseNumber`

	* #### Arguments

		`num(Any)`: value ready to parse

		`default(Number)`: if parse fail,return default value, default to 0

	* #### Return

		`(Number=0)`: if parse fail,return default value, default to 0

	* #### Example

		```javascript
		util.parseNumber('1');
		// => 1

		util.parseNumber('normal string', 10);
		// => 10

		util.parseNumber('normal string');
		// => 0
		```

* ## `util.parseUrl`

	* #### Arguments

		`url(String)`: url string ready to parse

		`protocol='http'(String)`:url protocol

	* #### Return

		`(String)`: parse url with protocol

	* #### Example

		```javascript
		util.parseUrl('127.0.0.1');
		// => 'http://127.0.0.1'

		util.parseUrl('http://127.0.0.1');
		// => 'http://127.0.0.1'

		util.parseUrl('127.0.0.1:6379', 'redis');
		// => 'redis://127.0.0.1:6379'
		```