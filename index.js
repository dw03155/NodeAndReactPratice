const express = require('express'); //express 모듈 가져오기
const res = require('express/lib/response');
const app = express(); // 새로운 express 만들기
const port = 5000; // port

const config = require('./config/key');
const mongoose = require('mongoose');

//**dev.js, prod.js, key.js 없는 버전 (비밀설정 정보관리 전)
// mongoose.connect('mongodb+srv://hazzys:1234@hazzys.anzyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ //몽고DB cluster 추가시 connection application code + 비밀번호(<password> 대신)

//**dev.js, prod.js, key.js 관련 버전 (비밀설정 정보관리 후)
mongoose.connect(config.mongoURI, { useNewUrlParser:true, useUnifiedTopology:true // 몽고DB 입력시 안하면 에러
}).then(() => console.log('MongoDB connected!!')) // 몽고DB 연결 성공시 출력
.catch(err => console.log(err)); // 몽고DB 연결 실패시 출력

app.get('/', (req, res) => {
  res.send('Hello World!')
}); // root directory 일때 hello world 출력

const { User } = require("./models/User"); //User 정보 가져오기

const bodyParser = require('body-parser'); //body-parser 정보 가져오기
//application/x-www-form-urlencoded 형태
app.use(bodyParser.urlencoded({extended : true})); //body-parser 옵션 설정하기
//application/json 형태
app.use(bodyParser.json()); //body-parser 옵션 설정하기
app.post('/register', (req, res) => { // 회원가입할 때 정보를 client에서 가져와서 DB에 넣음
  const user = new User(req.body); //body-parser 이용해서 req.body 사용
  user.save((err, doc) =>{
    if(err) return res.json({success : false, err}) //json형식으로 전달함
    return res.status(200).json({success : true}) //200을 json형식으로 전달함
  });
});

app.get('/', (req, res) => res.send('Hello World!')); // root directory 일때 hello world 출력

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); // port에서 앱 출력하기