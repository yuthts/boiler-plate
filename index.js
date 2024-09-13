const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require("./config/key")

//application/x-www-urlencoded 형식의 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));

//application/json 형태의 데이터 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', async (req, res) => {
    //client의 정보들을 data base 내부에 넣어 줌
    try {
        // client의 정보들을 데이터베이스에 저장
        const user = new User(req.body);
        // 인스턴스 생성

        // 프로미스를 반환하므로 await를 사용하여 결과를 기다림
        await user.save();

        // 성공했을 때 JSON 형식으로 전달
        res.status(200).json({
            success: true
        });
    } catch (err) {
        // 정보 저장할 때 에러가 발생하면 JSON 형식으로 false와 err 메시지 전달
        res.json({ success: false, err });
    } //mongo db에서 옴, user model에 정보들 저장
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
