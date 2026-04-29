

function operate(a,b, callback){
    return callback(a,b)
}

function multibly(a,b){
    return a + b;
}

function devide(a,b){
    return a / b;
}

console.log(operate(4,8,multibly))
console.log(operate(9,60,devide))
