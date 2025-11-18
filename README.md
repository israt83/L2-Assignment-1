
## Enums এর ব্যবহার

- **Enums (Enumeration)** ব্যবহার করা হয় যাতে আমরা কিছু সম্পর্কিত স্থির (constant) মানগুলোকে একটি নামের অধীনে গ্রুপ করতে পারি।  
- এতে প্রতিটি মান অনন্য হয়, অর্থাৎ duplicate value allow করা যায় না।  
- Enums ব্যবহার করলে কোড আরও readable হয়, ভুল মান ব্যবহার কমে, এবং নির্দিষ্ট options গুলো type-safeভাবে enforce করা যায়।  
- Enums মূলত তখন ব্যবহার করা হয় যখন আমাদের fixed বা limited কিছু options থাকে, যেমন Status, Role, Direction ইত্যাদি।  

---

### উদাহরণ: Numeric Enum 

```ts

enum Status {
  Pending,      
  InProgress,   
  Completed     
}
let currentStatus: Status = Status.InProgress;
console.log(currentStatus); 

```ts
Output: 1

---

### উদাহরণ: String Enum 

```ts


enum StatusString {
   Success = 'success',
   Error = 'error',
   Loading = 'loading',
}

let state: StatusString = StatusString.Loading;
console.log(state); 

```ts
Output: 'loading'