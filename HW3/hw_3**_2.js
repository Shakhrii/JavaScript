/*
2. Написать функцию, которая будет принимать 1 аргумент 
(id отдела или название отдела и возвращать название предприятия, 
    к которому относится).
Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

function getEnterpriseName(arg) {
    for (let enterpriseKey in enterprises) {
      let departments = enterprises[enterpriseKey].departments
      for (let departmentKey in departments) {
        let department = departments[departmentKey]
        if (!isNaN(arg)) { //если ввели число, то есть id отдела
          if (department.id == arg) {
              return enterprises[enterpriseKey].name
          }
      } else { // если ввели название отдела
          if ((department.name).toLowerCase() == arg.toLowerCase()) {
            return enterprises[enterpriseKey].name
          }
        } 
      }
    }
  return "Не найдено"
}

console.log(getEnterpriseName(4))
console.log(getEnterpriseName("Отдел маркетинга")) 
