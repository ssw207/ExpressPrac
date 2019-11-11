const express = require('express');
const app = express();
const path = require('path');
const indexRouter =  require(path.join(__dirname, 'router', 'index'));

// index/ 요청만 지정한 라우터로 보냄
app.use('/index', indexRouter); // indexRouter는 router객체를 리턴

//view 세팅
app.set('view engine', 'ejs'); // view엔진 세팅
app.set('views', path.join(__dirname, 'views')); // view 경로 설정

app.use(express.static(path.join(__dirname, 'public'))); // 정적파일 관리

// app이 3000번 포트를 리스닝, 성공시 콜백실행
app.listen(3000, function () { 
  console.log('Example app listening on port 3000!');
});

app.get('/', (req, res) => {
  console.log("시작");
})
