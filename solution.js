var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function formatValue(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        return !input;
    }
    return input;
}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));
// problem -2 /
// use generic
function getLength(value) {
    if (typeof value === 'string')
        return value.length;
    else if (Array.isArray(value))
        return value.length;
    return 0;
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));
// problem -3
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "'Name : ".concat(this.name, " , Age : ").concat(this.age, "'");
    };
    return Person;
}());
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());
// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
// problem-4 ok
function filterByRating(items) {
    return items
        .filter(function (item) { return item.rating >= 4 && item.rating <= 5; })
        .map(function (item) { return (__assign(__assign({}, item), { rating: Number(item.rating.toFixed(1)) })); });
}
function filterActiveUsers(users) {
    var activeUser = users.filter(function (user) { return user.isActive === true; });
    return activeUser;
}
var users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
function printBookDetails(book) {
    var availability = book.isAvailable ? "Yes" : "No";
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published: ").concat(book.publishedYear, ", Available: ").concat(availability));
}
var myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: false,
};
// printBookDetails(myBook);
// problem -7 ok
function getUniqueValues(arr1, arr2) {
    var result = [];
    var resultLength = 0;
    // Process arr1
    for (var i = 0; i < arr1.length; i++) {
        var alreadyAdded = false;
        for (var j = 0; j < resultLength; j++) {
            if (result[j] === arr1[i]) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) {
            result[resultLength] = arr1[i];
            resultLength++;
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        var alreadyAdded = false;
        for (var j = 0; j < resultLength; j++) {
            if (result[j] === arr2[i]) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) {
            result[resultLength] = arr2[i];
            resultLength++;
        }
    }
    return result;
}
function calculateTotalPrice(products) {
    var totalPrice = products.map(function (product) {
        var total = product.price * product.quantity;
        return product.discount ? total * (1 - product.discount / 100) : total;
    });
    var total = totalPrice.reduce(function (acc, curr) { return acc + curr; }, 0);
    return total;
}
var products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
// console.log(calculateTotalPrice(products));
var status;
(function (status) {
    status["success"] = "success";
    status["error"] = "error";
    status["loading"] = "loading";
})(status || (status = {}));
var state = status.loading;
console.log(state);
