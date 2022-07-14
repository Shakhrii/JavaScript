/* 5. Написать функцию для редактирования названия предприятия. 
Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")*/

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

function editEnterpriseName(id, newName) {
    for (let key in enterprises) {
      if (enterprises[key].id == id) {
        enterprises[key].name = newName
        return
      }
    }
  }

  // отображение списка
  function showArray(array) {
    array.forEach(item => {
      console.log(item)
    })
  }
  // функция для получения последнего id в списке
  function getLastId() {
    let lastItem = enterprises[enterprises.length -1]
    let departments = lastItem.departments
    let lastId
    
    if (departments.length > 0) {
      lastId = departments[departments.length - 1].id
    } else {
      lastId = lastItem.id
    }
    return lastId
  }
  
  
  editEnterpriseName(5, "Новое название")
  showArray(enterprises)