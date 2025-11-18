What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
=>Enums (Enumeration) ব্যবহার করা হয় যাতে আমরা কিছু সম্পর্কিত স্থির (constant) মানগুলোকে একটি নামের অধীনে গ্রুপ করতে পারি। এতে প্রতিটি মান অনন্য হয়, অর্থাৎ duplicate value allow করা যায় না। 
=>Enums ব্যবহার করলে কোড আরও readable হয়, ভুল মান ব্যবহার কমে, এবং নির্দিষ্ট options গুলো type-safeভাবে enforce করা যায়।
=>Enums মূলত তখন ব্যবহার করা হয় যখন আমাদের fixed বা limited কিছু options থাকে, যেমন Status, Role, Direction ইত্যাদি।

উদাহরণ ২: String Enum
enum status {
   success = 'success',
   error = 'error',
   loading = 'loading',
}

let state: status = status.loading;
console.log(state);


=> এই code-এ আমরা status নামে একটি string enum তৈরি করেছি, যাতে success, error, loading মানগুলো থাকে। আমরা state ভেরিয়েবলকে enum টাইপ দিয়ে loading assign করেছি। TypeScript নিশ্চিত করে যে শুধুমাত্র enum-এ থাকা valid মানই assign হবে। console-এ output হবে 'loading'।

# TypeScript Enums Example

## Enums এর ব্যবহার

- **Enums (Enumeration)** ব্যবহার করা হয় যাতে আমরা কিছু সম্পর্কিত স্থির (constant) মানগুলোকে একটি নামের অধীনে গ্রুপ করতে পারি।  
- এতে প্রতিটি মান অনন্য হয়, অর্থাৎ duplicate value allow করা যায় না।  
- Enums ব্যবহার করলে কোড আরও readable হয়, ভুল মান ব্যবহার কমে, এবং নির্দিষ্ট options গুলো type-safeভাবে enforce করা যায়।  
- Enums মূলত তখন ব্যবহার করা হয় যখন আমাদের fixed বা limited কিছু options থাকে, যেমন Status, Role, Direction ইত্যাদি।  

---

## উদাহরণ: Numeric ও String Enum 

```ts

enum Status {
  Pending,      
  InProgress,   
  Completed     
}
let currentStatus: Status = Status.InProgress;
console.log(currentStatus); // Output: 1

enum StatusString {
   Success = 'success',
   Error = 'error',
   Loading = 'loading',
}

let state: StatusString = StatusString.Loading;
console.log(state); // Output: 'loading'

