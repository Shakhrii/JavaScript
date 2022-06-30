//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень,
// в которую будет возводиться число 2

function calculateDegree(degree) {
    for (let i=1; i <=degree; i++) {
        console.log("2^" + i + " = " + Math.pow(2,i))
    }
}

calculateDegree(20)