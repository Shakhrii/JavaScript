function check_age(age_1) {
    let result
    //если age_1 не типа Number
    /*if (typeof(age_1) != "number") {
        //если age_1 не состоит из цифр, то выбрасываем исключение
        if (isNaN(age_1)) {
            return "Wrong Type"
        } else { 
            //если age_1 состоит из цифр и он содержит только 1 цифру, то 
            // преобразовываем его в Number
            if (String(age_1).length == 1) {
                age_1 = Number(age_1)
            } else {
                return "Wrong Type"
            }
        }
    }  */

    let age_2 = 18
    let age_3 = 60 

    if (age_1 < age_2) {
        result = "You don’t have access cause your age is "  + age_1 + " It’s less then " +  age_2
    } else if ((age_1 >= age_2) && (age_1 < age_3)) {
        result = "Welcome!"
    } else if (age_1 > age_3) {
        result = "Keep calm and look Culture channel"
    } else {
        result = "Technical work"
    }
return result
}
function on_click() {
    const res = prompt("Введите Ваш возраст", ""); 
    let result = check_age(res)

    return result
}

function display_result() {
    let result = on_click()
    document.getElementById('result').innerHTML = result
}

