const fs = require('fs')

function readFileToJson(path) {
    var data = fs.readFileSync(path, 'utf-8')
    return data
}

function removeDuplicates(users) {
    let uniqueUsers = []
    let stringArr = []
  
    uniqueUsers = users.filter(user => {
        const userStr = JSON.stringify(user)
        if (!stringArr.includes(userStr)) {
            stringArr.push(userStr)
            return true
        }
        return false
    })
    return uniqueUsers
}

let filePath = "./HW3/task2.json"
users = readFileToJson(filePath)

let uniqueUsers = removeDuplicates(JSON.parse(users))
console.log(uniqueUsers)