//todo Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]]

//? Вирішення:

// const numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.map(number => number ** 2);
// console.log(squareNumbers);

//todo Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

//? Вирішення:

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const values = data.flatMap(item => item.values);
// console.log(values);

//todo Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//? Вирішення:

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const isYoung = people.some(persone => persone.age < 20);
// console.log(isYoung);

//todo Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

//? Вирішення:

// const numbers = [2, 4, 6, 8, 10];

// const isEven = numbers.every(number => number % 2 === 0);
// console.log(isEven);

//todo Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

//? Вирішення:

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const fisrstOddNumber = numbers.find(number => number % 2 !== 0);
// console.log(fisrstOddNumber);

//todo Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

//? Вирішення:

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedNumbers = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedNumbers);

//todo Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

//? Вирішення:

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedNames = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedNames);

//todo Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//? Вирішення:

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const usersSortedByAge = users.toSorted((a, b) => a.age - b.age);
// console.log(usersSortedByAge);

//todo Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

//? Вирішення:

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const usersOlderThan20 = user.filter(user => user.age > 20);

// console.log(usersOlderThan20);

//todo Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

//? Вирішення:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, number) => acc + number, 0);

// console.log(sum);

//todo Завдання 11:
// Створи клас для калькулятора, який має такі методи:
// - метод number, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

//? Вирішення:

// class Calculator {
//   constructor(value = 0) {
//     this.value = value;
//   }

//   add(number) {
//     this.value += number;
//     return this;
//   }

//   subtract(number) {
//     this.value -= number;
//     return this;
//   }

//   divide(number) {
//     if (number !== 0) {
//       this.value /= number;
//     } else {
//       console.error('Помилка: Ділення на 0!');
//     }
//     return this;
//   }

//   multiply(number) {
//     this.value *= number;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();
// const result = calc.add(10).multiply(2).subtract(5).divide(3).getResult();

// console.log(result);

//todo Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

//? Вирішення:

// class Client {
//   #login;
//   #email;

//   constructor(users) {
//     this.#login = users.login;
//     this.#email = users.email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client({
//   login: 'Admin',
//   email: 'admin@.com',
// });

// console.log(client.login);
// console.log(client.email);

// client.login = 'SuperAdmin';
// client.email = 'superadmin@.com';

// console.log(client.login);
// console.log(client.email);

//todo Завдання 13:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// ##### Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

//? Вирішення:

// class Person {
//   constructor(users) {
//     this.name = users.name;
//     this.age = users.age;
//     this.gender = users.gender;
//     this.email = users.email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(users) {
//     super(users);
//     this.salary = users.salary;
//     this.department = users.department;
//   }

//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const employee = new Employee({
//   name: 'Adam',
//   age: 25,
//   gender: 'male',
//   email: 'adam@.com',
//   salary: 1000,
//   department: 'IT',
// });

// console.log(employee.getEmployeeDetails());
