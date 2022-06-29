function check_age(age_1) {

    if (typeof(age_1) != "number") {
        throw "Wrong Type"
    }

    let result
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
console.log(check_age("123"))
console.log(check_age(17))
console.log(check_age(18))
console.log(check_age(61))
