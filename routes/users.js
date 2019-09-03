var express = require('express');
var router = express.Router();

const users = [
  { id: 0, name: 'a' },
  { id: 1, name: 'q' },
  { id: 2, name: 'w' },
  { id: 3, name: 'e' },
  { id: 4, name: 'r' },
  { id: 5, name: 't' },
  { id: 6, name: 'y' },
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  setTimeout(() => res.send(users), 4000);
});

module.exports = router;
