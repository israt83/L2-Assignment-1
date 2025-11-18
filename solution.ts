function formatValue(
  input: string | number | boolean
): string | number | boolean {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } 
  else if (typeof input === "boolean") {
    return !input
  }
  return input;
}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// problem -2 /

// use generic

function getLength < T> (value : string |  T[]) : number{
    if(typeof value === 'string') return value.length
    else if (Array.isArray(value)) return value.length
    return 0
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));


// problem -3

class Person {
    name : string;
    age : number

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;

    }
    getDetails (){
        return `'Name : ${this.name} , Age : ${this.age}'`
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// problem-4 ok

function filterByRating<T extends { title: string; rating: number }>(items: T[]): T[] {
  return items
    .filter(item => item.rating >= 4 && item.rating <= 5)
    .map(item => ({
      ...item,
      rating:Number( item.rating.toFixed(1))
    }));
}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));




// problem -5  ok


interface User {
    id : number;
    name : string;
    email : string;
    isActive : boolean
}

function filterActiveUsers (users : User[]) : User[]{
    const activeUser = users.filter(user => user.isActive === true)
    return activeUser
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));

// probelm -6 //need to fix

interface Book {
    title :  string;
    author : string;
    publishedYear: number;
    isAvailable : boolean
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

// printBookDetails(myBook);

// problem -7 ok

function getUniqueValues<T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] {
  const result: T[] = [];
  let resultLength = 0; 

  // Process arr1
  for (let i = 0; i < arr1.length; i++) {
    let alreadyAdded = false;

    for (let j = 0; j < resultLength; j++) {
      if (result[j] === arr1[i]) {
        alreadyAdded = true;
        break;
      }
    }

    if (!alreadyAdded) {
      result[resultLength] = arr1[i] as T; 
      resultLength++;
    }
  }


  for (let i = 0; i < arr2.length; i++) {
    let alreadyAdded = false;

    for (let j = 0; j < resultLength; j++) {
      if (result[j] === arr2[i]) {
        alreadyAdded = true;
        break;
      }
    }

    if (!alreadyAdded) {
      result[resultLength] = arr2[i] as T; 
      resultLength++;
    }
  }

  return result;
}


// problem - 8  ok

interface Product {
    name : string;
    price : number;
    quantity : number;
    discount ? : number
}

function calculateTotalPrice (products : Product[]) : number{
    const totalPrice = products.map(product => {
        const total = product.price * product.quantity;
        return product.discount? total * (1 - product.discount/100) : total;
    })
    const total = totalPrice.reduce((acc , curr) => acc + curr ,0);
    return total;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));


enum status {
   success = 'success',
   error = 'error',
   loading = 'loading',
   

}

let state : status = status.loading;
console.log(state);



