const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to the beginning of nothingness.',
}));

const port = 3001;
app.listen(port, () =>
	console.log(`App is running on port ${port}.`)
);