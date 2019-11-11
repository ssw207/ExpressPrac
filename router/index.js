const express = require('express');
const router = express.Router(); //익스프레스 라우터 미들웨어 함수 호출

router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;