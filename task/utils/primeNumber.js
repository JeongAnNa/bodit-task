function getPrimeNumber(at){
    result=[2, [2, 3]]

    for (i=4; i<=at; i++){
        cnt=0
        for(j=2; j<i; j++){
            if (i%j == 0){ cnt++; }
        }
        if (cnt==0){
            result[0]++;
            result[1].push(i)
        }
    }

    return result
}

module.exports = getPrimeNumber