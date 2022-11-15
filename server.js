const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get('/get_fizz', function (req, res) {
	const num = +req.query.num;
	let ans = '';
	/*
      fizz = 10
      buzz = 012
      fizzbuzz = 01110
      number = 2 (then keep a count and increment)
   */
	for (let i = 1; i <= num; i++) {
		if (i % 15 === 0) {
			ans += '01110';
		} else if (i % 3 === 0) {
			ans += '10';
		} else if (i % 5 === 0) {
			ans += '012';
		} else {
			ans += '2';
		}
	}
	const response = { message: ans };
	res.send(JSON.stringify(response));
});

const server = app.listen(8081, function () {
	const port = server.address().port;
	console.log('Listening on port:', port);
});
