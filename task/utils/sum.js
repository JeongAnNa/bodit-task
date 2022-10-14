function sum(start, end){
    result = 0

    for(i=start; i <= end; i++) {
        result+=i
        console.log(result)
    }
    
    return result
}

module.exports = sum