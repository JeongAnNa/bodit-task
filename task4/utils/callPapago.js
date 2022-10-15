require('dotenv').config();

function callPapago(res, text){
    const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    const request = require('request');
    const options = {
        url: api_url,
        form: {'source':'ko', 'target':'en', 'text':text},
        headers: {'X-Naver-Client-Id':process.env.CLIENT_ID, 'X-Naver-Client-Secret': process.env.CLIENT_SECRET} // Papago Open API의 Access ID와 Secret Key는 환경변수 처리
    };

    request.post(options, function(error, response, body){
        if(!error && response.statusCode == 200){
            result = JSON.parse(body); // body Data를 Object형으로 변환
            res.json({ "Result": result['message']['result']['translatedText']});
        }else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode); // API 에러 발생 시 응답받은 오류 코드 출력
        }     
    });
}

module.exports = callPapago;