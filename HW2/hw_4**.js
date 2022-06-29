/* 4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba' */

//переворачивает слово 
function reverse(s) {
    return s.split("").reverse().join("");
}

// проверяет является ли слово палиндромом
function isPalindrom(text) {
    //проверяем является ли аргумент text строковым
    if (typeof(text) != "string") {
        console.log("Неверный тип данных")
        return false
    } 

    //сравниваем исходную строку с реверсивной 
    let result = (text).localeCompare(reverse(text), undefined, { sensitivity: 'base' })
    //если строки равны
    if (result == 0) {
        console.log("Это палиндром")
    } else { //если не равны
        console.log("Это не палиндром")
    } 
}

isPalindrom("Abba")
isPalindrom("abba")
isPalindrom("ratar")
isPalindrom("qwerty")
isPalindrom("Абба")
isPalindrom(123)


