const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send(data);
});

router.get('/:id', function (req, res) {
  let id = req.params.id;
  res.send(data[id]);
});

router.post('/', function (req, res) {
  console.log(req);
  let id = req.body.id;
  if (id in data) {
    res.send(data[id]);
  } else {
    res.send(error);
  }
});

const data = {
  1: {
    "a": "b"
  },
  2: {
    "c": "d"
  }
};

const error = {
  "message": "invalid id"
};

module.exports = router;