/* 2*. Преобразовать 2 задачу в функцию, принимающую на 
вход строку, которая и будет выводиться в консоль 
(как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows) */

function printSymbols(symbol, numberOfLines) {
    let line = ""
    for (let i = 1; i <= numberOfLines; i++) {
        for (let j = 1; j<= i; j++) {
            line = line + symbol
        }
        console.log(line)
        line = ""
    }
}

printSymbols("#", 10)