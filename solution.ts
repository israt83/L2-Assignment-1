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


function getLength < T> (value : string |  T[]) : number{
    if(typeof value === 'string') return value.length
    else if (Array.isArray(value)) return value.length
    return 0
}


class Person {
    name : string;
    age : number

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;

    }
    getDetails (){
        return `'Name : ${this.name}, Age : ${this.age}'`
    }
}





function filterByRating<T extends { title: string; rating: number }>(items: T[]): T[] {
  return items
    .filter(item => item.rating >= 4 && item.rating <= 5)
    .map(item => ({
      ...item,
      rating:Number( item.rating.toFixed(1))
    }));
}



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




function getUniqueValues<T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] {
  const result: T[] = [];
  let resultLength = 0; 


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







