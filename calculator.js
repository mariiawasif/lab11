function sum(a,b){
    return a+b;
}

function subtract(a,b){
    if(b<a){
        return a-b;
    }
}

function divide(a,b){
    if(b!=0){
        return a/b;
    }
    else{
        return 0;
    }
}

function multiply(a,b){
    return a*b;
}

module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;


