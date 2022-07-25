/* 7. Написать функцию для удаления предприятия. 
В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1) */

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
  
function deleteEnterprise(id) {
    for (let enterpriseKey in enterprises) {
      if (enterprises[enterpriseKey].id == id) {
        enterprises.splice(enterpriseKey, 1)
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
  
  deleteEnterprise(1)
  showArray(enterprises)
  