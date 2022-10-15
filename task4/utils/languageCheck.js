function languageCheck(text){
    const pattern = /^[0-9가-힣a-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;
    return pattern.test(text.replace(/ /g, '')) // 공백 제거한 Text에 한글, 영어, 숫자, 특수문자 외의 다른 언어 입력 시 Error 반환
}

module.exports = languageCheck;