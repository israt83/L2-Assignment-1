
## Enums এর ব্যবহার

- **Enums (Enumeration)** ব্যবহার করা হয় যাতে আমরা কিছু সম্পর্কিত স্থির (constant) মানগুলোকে একটি নামের অধীনে গ্রুপ করতে পারি।  
- এতে প্রতিটি মান অনন্য হয়, অর্থাৎ duplicate value allow করা যায় না।  
- Enums ব্যবহার করলে কোড আরও readable হয়, ভুল মান ব্যবহার কমে, এবং নির্দিষ্ট options গুলো type-safeভাবে enforce করা যায়।  
- Enums মূলত তখন ব্যবহার করা হয় যখন আমাদের fixed বা limited কিছু options থাকে, যেমন Status, Role, Direction ইত্যাদি।  

---

#### উদাহরণ: Numeric Enum 

```ts

enum Status {
  Pending,      
  InProgress,   
  Completed     
}
let currentStatus: Status = Status.InProgress;
console.log(currentStatus); 

```
#### Output
```ts 
1
```
#### উদাহরণ: String Enum 
```ts
enum StatusString {
   Success = 'success',
   Error = 'error',
   Loading = 'loading',
}

let state: StatusString = StatusString.Loading;
console.log(state);
```
#### Output
```ts
loading
```
## union  types in TypeScript
- TypeScript-এ যদি কোনো ভেরিয়েবল, প্যারামিটার বা প্রপার্টি একাধিক টাইপের মান নিতে পারে, তখন union type ব্যবহার করা হয় |

#### উদাহরণ:  union types

```ts
let value: string | number;

value = "Hello"; 
console.log(value); 

value = 10;  
console.log(value); 


```
#### Output
```ts
Hello
10

```

## intersection types in TypeScript
- TypeScript-এ একাধিক টাইপকে merge করে  একটি নতুন টাইপ তৈরী করা হয় Intersection type ব্যবহার করে।


#### উদাহরণ:  intersection types
```ts
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  role: string;
}

// Intersection type
type EmployeePerson = Person & Employee;

const sawaira: EmployeePerson = {
  name: "Sawaira",
  age: 30,
  employeeId: 101,
  role: "Developer"
};

console.log(sawaira);       
```
#### Output
```ts
{
  name: "Sawaira",
  age: 30,
  employeeId: 101,
  role: "Developer"
}
```