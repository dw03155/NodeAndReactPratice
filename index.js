const express = require('express'); //express 모듈 가져오기
const res = require('express/lib/response');
const app = express(); // 새로운 express 만들기
const port = 5000; // port

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hazzys:1234@hazzys.anzyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ //몽고DB cluster 추가시 connection application code + 비밀번호(<password> 대신)
  useNewUrlParser : true, useUnifiedTopology : true // 몽고DB 입력시 안하면 에러
}).then(() => console.log('MongoDB connected!!')) // 몽고DB 연결 성공시 출력
.catch(err => console.log(err)); // 몽고DB 연결 실패시 출력

app.get('/', (req, res) => {
  res.send('Hello World!')
}); // root directory 일때 hello world 출력

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}); // port에서 앱 출력하기