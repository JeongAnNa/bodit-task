// 이차방정식의 근을 구하는 function
function getEquation(a, b, c){
    result=[]

    result.push((b*-1 + Math.sqrt(b*b - (4*a*c)))/2*a)
    result.push((b*-1 - Math.sqrt(b*b - (4*a*c)))/2*a)

    if(result[0] == result[1]) result.pop()

    return result.sort()
}

module.exports = getEquation