function getSumTotal(start, end){
    result = 0

    for(i=start; i <= end; i++) {
        result+=i
    }
    
    return result
}

module.exports = getSumTotal