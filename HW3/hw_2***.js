/* Task 2*** Реализуйте считывание из JSONки из файла task2.json 
с помощью, например, модуля fs. для дальнейшего использования в функции,
 описанной в задании */

 //подключение модуля для работы с файлами
const fs = require('fs')

//чтение и конвертация содержимого файла в строку
function readFileToStr(path) {
    var data = fs.readFileSync(path, 'utf-8')
    return data
}

//удаление дубликатов в массиве объектов
function removeDuplicates(users) {
    let uniqueUsers = []
    let stringArr = []
  
    //проходит по массиву и возвращает элементы, удовлетворяющие условию
    uniqueUsers = users.filter(user => {
        // конвертируем в строку для удобного сравнения элементов
        const userStr = JSON.stringify(user)
        //проверяем существование этого элемента в массиве элементов-строк
        if (!stringArr.includes(userStr)) {
            //если не существует - добавляем
            stringArr.push(userStr)

            return true // добавляет в новый массив текущий элемент
        }
        return false //не добавляет элемент
    })
    return uniqueUsers
}

let filePath = "./HW3/task2.json"
users = readFileToStr(filePath)

let uniqueUsers = removeDuplicates(JSON.parse(users))
console.log(uniqueUsers)