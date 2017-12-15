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

* ## `util.parse.json`

	* #### Arguments

		`str(Any)`: string ready to parse

	* #### Return

		`(Object | String)`: if str is a JSON,return Object,else return itself

	* #### Example

		```javascript
		util.parse.json(`{"a":1}`);
		// => { a: 1 }

		util.parse.json('normal string');
		// => normal string
		```

* ## `util.parse.number`

	* #### Arguments

		`num(Any)`: value ready to parse

		`default(Number)`: if parse fail,return default value, default to 0

	* #### Return

		`(Number=0)`: if parse fail,return default value, default to 0

	* #### Example

		```javascript
		util.parse.number('1');
		// => 1

		util.parse.number('normal string', 10);
		// => 10

		util.parse.number('normal string');
		// => 0
		```

* ## `util.parse.url`

	* #### Arguments

		`url(String)`: url string ready to parse

		`protocol='http'(String)`:url protocol

	* #### Return

		`(String)`: parse url with protocol

	* #### Example

		```javascript
		util.parse.url('127.0.0.1');
		// => 'http://127.0.0.1'

		util.parse.url('http://127.0.0.1');
		// => 'http://127.0.0.1'

		util.parse.url('127.0.0.1:6379', 'redis');
		// => 'redis://127.0.0.1:6379'
		```