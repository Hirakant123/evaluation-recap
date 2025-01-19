



































































































// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];


// let rearrangeFruits = fruits.splice(6,4)

//    fruits.splice(0,0,...rearrangeFruits)

// console.log(fruits);


// // grouping and sorting


// const products = [
//     { productName: "Laptop", category: "Electronics", quantity: 10, price: 1200, rating: 4.5 },
//     { productName: "Smartphone", category: "Electronics", quantity: 15, price: 800, rating: 4.2 },
//     { productName: "Headphones", category: "Electronics", quantity: 20, price: 50, rating: 4.0 },
//     { productName: "Backpack", category: "Fashion", quantity: 30, price: 50, rating: 4.7 },
//     { productName: "Shoes", category: "Fashion", quantity: 25, price: 80, rating: 4.3 },
//     { productName: "T-Shirt", category: "Fashion", quantity: 40, price: 20, rating: 4.8 },
//     { productName: "Desk", category: "Furniture", quantity: 5, price: 300, rating: 4.6 },
//     { productName: "Chair", category: "Furniture", quantity: 8, price: 150, rating: 4.4 },
//     { productName: "Table", category: "Furniture", quantity: 7, price: 200, rating: 4.1 },
//     { productName: "Bookshelf", category: "Furniture", quantity: 3, price: 100, rating: 4.9 },
//     { productName: "Camera", category: "Photography", quantity: 12, price: 500, rating: 4.7 },
//     { productName: "Lens", category: "Photography", quantity: 6, price: 250, rating: 4.5 }
//    ];
   
   

// function groupAndSortProducts(products){
//   let groupedProducts = products.reduce((acc,curr) =>{
//     if(!acc[curr.category]){
//         acc[curr.category] = [];
//     }
//     acc[curr.category].push(curr);
//     return acc
//   },{});

// let sortedByRating = Object.keys(groupedProducts).reduce((acc,curr) =>{
//      let sortedCategory = groupedProducts[curr].sort((a,b) => b.raing - a.rating);
//      acc[curr] = sortedCategory;
//      return acc;
// },{});

// return sortedByRating;

// }

// console.log(groupAndSortProducts(products))

// // multilevel destructuring challenge


// const company = {
//     name: "Tech Solutions Inc.",
//     departments: {
//       engineering: {
//        manager: {
//           name: "John Doe",
//           age: 35,
//           position: "Engineering Manager",
//          salary: 100000,
//                 },
//         employees: [
//           { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
//           { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
//         ],
//       },
//       sales: {
//         manager: {
//           name: "Jane Smith",
//           age: 40,
//           position: "Sales Manager",
//           salary: 95000,
//         },
//         employees: [
//           { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
//           { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
//         ],
//       },
//       marketing: {
//         manager: {
//           name: "Emily Johnson",
//           age: 37,
//           position: "Marketing Manager",
//           salary: 90000,
//         },
//         employees: [
//           { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
//           { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
//         ],
//       },
//     },
//   };



//   // 1. manager details 
  
// function extractManagerDetails(company){
//    let managerDetails = [];
//    for(let department in company.departments) {
//     let {manager : {name, age, position, salary}} = company.departments[department];
//     managerDetails.push({name, age, position, salary});
//    }

//    return managerDetails
// }

// let result1 = extractManagerDetails(company)

// console.log(result1)

// // 2. calculating Average Salary

// function calculateAverageSalary(company){
//   let totalSalary = 0;
//   let totalEmployees = 0;

//   for(let department in company.departments) {
//     let {manager, employees} = company.department[department]

//     totalSalary +=  manager.salary;
//     totalEmployees += 1;

   
//     for(let employee of employees) {
//         totalSalary += employee.salary;
//         totalEmployees += 1;
//       }
//   }

//   let averageSalary = (totalSalary / totalEmployees).toFixed(2);
//   return parseFloat(averageSalary);
// }

// let averageSalary = calculateAverageSalary(company);

// console.log(averageSalary);


// // 3. Highest Paid Employee

// function findHighestPaidEmployee(company){
//     let highestPaidEmplyee = {name: '', salary: 0};

//     for(let department in company.departments) {
//         let {manager, employees} = company.departments[department];

//         if(manager.salary > highestPaidEmplyee.salary) {
//             highestPaidEmplyee = {name: manager.name, salary: manager.salary}
//         }

//         for(let employee of employees){
//             if(employee.salary > highestPaidEmplyee.salary) {
//                 highestPaidEmplyee = {name: employee.name, salary: employee.salary};
//             }
//         }
//     }

//     return highestPaidEmplyee
// }

// let highestPaidEmplyee = findHighestPaidEmployee(company);

// console.log(highestPaidEmplyee);