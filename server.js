const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

// routes

const sample = require('./routes/sample');

// use cors to solve CORS browser issues for local development

app.use(cors());
app.use(bodyParser.json());

// default endpoint

app.get('/', function (req, res) {
  res.status(200).send('welcome to mock-server');
});

// api endpoints

app.use('/api/sample', sample);

// init server

const port = 3001;
app.listen(port, function () {
  console.log('Server on port http://localhost:' + port)
});
