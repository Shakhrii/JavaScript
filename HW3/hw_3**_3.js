/* 3. Написать функцию, которая будет добавлять предприятие.
 В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")*/

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

function addEnterprise(name) {
    let lastId = getLastId()
    let enterprise = new Object() //создание нового объекта предприятия
    
    enterprise.id = ++lastId
    enterprise.name = name;
    enterprise.departments = []
    enterprises.push(enterprise)  // добавление нового объекта предприятия в список
  }

// функция, которая возвращает последний id в списке
function getLastId() {
    //последний элемент массива
    let lastItem = enterprises[enterprises.length -1]
    let departments = lastItem.departments
    let lastId
    
    // если есть отделы, то достаем id из последнего отдела
    if (departments.length > 0) {
      lastId = departments[departments.length - 1].id
    } else { // если отделов нет, то берем id предприятия
      lastId = lastItem.id
    }
    return lastId
}

function showArray(array) {
    array.forEach(item => {
      console.log(item)
    })
}

  addEnterprise("Предприятие 4")
  showArray(enterprises)
