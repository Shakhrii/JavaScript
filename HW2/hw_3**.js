/* 3**.  Написать функцию, которая принимает на вход слово. 
Задача функции посчитать и вывести в консоль, сколько в 
слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв */

// проверяет, является ли символ буквой
function isLetter (char) {
    return char.toLowerCase() != char.toUpperCase()
}

// проверяет является ли буква гласной
function isVowel(char) { 
    // возвращает fasle, если буква не входит в данную строку 
    //"aeiouаеиоуэюяы", т е не является гласной
    return ("aeiouаеиоуэюяы".indexOf(char) != -1); 
}

// считает количество гласных и согласных букв
function countVowelsAndConsonants(word) {
    let count_vowels = 0
    let count_consonants = 0
    //приводим все буквы к нижнему регистру, затем преобразовываем в массив символов
    let chars = String(word).toLowerCase().split('')
    //проходимся по каждому символу, определяя согласная или гласная это буква
    chars.forEach(element => {
         //если буква
        if (isLetter(element)) {
            //если гласная
            if (isVowel(element)) {
                count_vowels++
            } else { // если согласная
                count_consonants++
            }
        }
    });
    console.log("Слово " + word + " состоит из " + count_vowels + " гласных букв" +
    " и " + count_consonants + " согласных букв")
}

countVowelsAndConsonants("case")
countVowelsAndConsonants("Case")
countVowelsAndConsonants("Check-list")
countVowelsAndConsonants("Hello")
countVowelsAndConsonants("Привет")
countVowelsAndConsonants("Импровизация")
countVowelsAndConsonants("Improvisation")

