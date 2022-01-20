//개발환경이 로컬인지 배포하는 것인지 따라서 환경변수 사용하여 다르게 적용
if(process.env.NODE_ENV == 'production') { //배포 모드
    module.exports = require('./prod')
}else {// development (개발 모드)
    module.exports = require('./dev')
}