//production 모드(배포 모드)
module.exports = {
    mongoURI : process.env.MONGO_URI //MONGO_URI : heroku 서비스 명과 같이 적기
}