/* 9. Написать функцию для переноса сотрудников между 
отделами одного предприятия. В качестве аргумента принимает 
два значения: id отдела, из которого будут переноситься 
сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3) */

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
    
function moveEmployees(idFrom, idTo) {
    let countEmployees = 0
    // находим отдел с id = idFrom 
    for (let enterpriseKey in enterprises) {
      let departments = enterprises[enterpriseKey].departments
      for (let departmentKey in departments) {
        let department = departments[departmentKey]
        if (department.id == idFrom) {
          countEmployees = department.employees_count //запоминаем, чтобы передать отделу idTo
          department.employees_count = 0 //обнуляем количество сотрудников в текущем отделе
          break
        }
      }
    }
  
    //находим отдел с id = idTo
    for (let enterpriseKey in enterprises) {
      let departments = enterprises[enterpriseKey].departments
      for (let departmentKey in departments) {
        let department = departments[departmentKey]
        if (department.id == idTo) {
          department.employees_count += countEmployees // добавляем сотрудников из отдела с id = idFrom
          break
        }
      }
    }
  }

   // отображение списка
   function showArray(array) {
    array.forEach(item => {
      console.log(item)
    })
  }
  
  moveEmployees(2, 3) 
  showArray(enterprises)