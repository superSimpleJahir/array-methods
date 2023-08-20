/* ===========================================
toString()
=========================================== */
// The toString() returns a string with array values separated by commas. And it dose not change the original array.

//(1) array.toString()  //Syntax.
let bikes = ['Yamaha', 'Bajaj', 'Honda', 'TVS'];
console.log(bikes.toString());
//returns this value: 'Yamaha,Bajaj,Honda,TVS'.

/* ===========================================
join()
=========================================== */

// The join() returns a new string by concatenating all of the elements in an Array,separated by commas or a specified separator string.
// (2)Array.join(separator); // Syntax

console.log(bikes.join());
// Expected output: 'Yamaha,Bajaj,Honda,TVS'

console.log(bikes.join(""));
// Expected output: 'YamahaBajajHondaTVS'

console.log(bikes.join("-"));
// Expected output: 'Yamaha-Bajaj-Honda-TVS'

/* ===========================================
pop()
=========================================== */

// The pop() method removes the last element of an Array. And returns the removed element. And this method changes the original array.
// (3)Array.pop() // Syntax
console.log(bikes.pop()); // return: TVS
console.log(bikes); // [ 'Yamaha', 'Bajaj', 'Honda' ]


/* ===========================================
push()
=========================================== */

// The push() adds new items to the end of an array, and its changes the length of the array. returns the new length. 

// array.push(item1, item2,..., itemX) //Syntax

console.log(bikes.push('Ducatti', 'Royal Enfield'));
console.log(bikes);

/* ===========================================
Shift()
=========================================== */

// The shift() removes first Element and returns it
// array.shift(); // syntax
console.log(bikes.shift());  // Yamaha
console.log(bikes);  // changes the original array
// [ 'Bajaj', 'Honda', 'Ducatti', 'Royal Enfield' ]

/* ===========================================
unshift()
=========================================== */

// The unshift() adds Element to beginning and return new array length
// Array.unshift(item1, item2,..., itemX)
console.log(bikes.unshift('BMW', 'Kawasaki'));
console.log(bikes);

/* ===========================================
delete()
=========================================== */
// Array Element can be deleted using the Javascript operator delete.using delete leaves undefined holes in the array 

// delete array[index];  // Syntax

let fruits = ['banana', 'apple', 'grapes'];

delete fruits[1];
console.log(fruits);  // [ 'banana', <1 empty item>, 'grapes' ]
fruits[1] = 'orange'
console.log(fruits);

/* ===========================================
concat()
=========================================== */

// the concat() method concatenates (joins) two or more arrays. returns a new array , containing the joined arraya. this methods dose not change the existing arrays.

// array1.concat(array2, array3, ..., arrayX)  // syntax
let array1 = [1, 2, 3, 4, 5];
let array2 = [122, 211, 333, 44, 55];
let array3 = [22, 11, 33, 64, 35];

let ary_new = array1.concat(array2, array3);
console.log(ary_new); // returns new array

/* ===========================================
sort()
=========================================== */
// the sort() sorts the Elements of an array1,and overwrites the orginal array1. Sorts the Elements as Strings in alphabetical and ascending ondragover.
// array . sort(comparefunction);  //Syntax
// sort() takes an optional compare function 

let ary = [99, 43, 23, 55, 30];
let str = ['Jahir', 'Mijan', 'Arif', 'Rafi'];
ary.sort();
console.log(ary); //return [23, 30, 43, 55, 99];
str.sort();
console.log(str); //return ['Arif', 'Jahir', 'Mijan', 'Rafi']

/* ===========================================
splice()
=========================================== */
// The splice() Method adds and /or removes array Elements. The splice() method overwrites the orginal array
// array1.splice(index,Howmany, items1, ..., itemX)

let number = [99, 100, 22, 43, 55];
number.splice(2, 3, 'a', 'b', 'c');
console.log(number);

/* ===========================================
slice()
=========================================== */
// The slice() slices out a piece from an array, it creates a new array. 
// array.slice(start, end); // Syntax
let numbers = [1, 2, 3, 5, 6, 7, 8, 94, 2, 22, 33, 32];
let num1 = numbers.slice(1, 4);
console.log(num1);

/* ===========================================
reverse()
=========================================== */
// The reverse() method reverse the order of the Elements in an array.
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stir = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
num2.reverse();
console.log(num2);
stir.reverse();
console.log(stir);

/* ===========================================
sort()
=========================================== */
num2.sort();
console.log(num2);
stir.sort();
console.log(stir);

/* ===========================================
isArray()
=========================================== */
// The isArray() method returns true if an object is an array1, otherwise false. Checke is an object is an.
// array.isArray(obj);
let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stir1 = 'Md jahirul islam';

console.log(Array.isArray(num3)); //true

console.log(Array.isArray(stir1)); //false


/* ===========================================
indexof()
=========================================== */

// The indexof() method returns the first index(positiin) of a specified value, returns -1 if the value is not found. and it searches from left to right. Negative start values counts fromo the last element (but still searches from left to right)

// array.indexOf(item, start);
let product = ['laptop', 'HeadSet', 'Mobile', 'Router'];
console.log(product.indexOf('Router', 4));

/* ===========================================
lastIndexof()
=========================================== */
// The lastIndexOf() Method returns the last index(position) of a specified Value, return -1 if the value is not found.start at a specified index and searches from right to left. Negitive start valuse counts from the last element (but still searches from right to left)

console.log(product.indexOf('Mobile', 0));
console.log(product.lastIndexOf('Mobile', 4));

/* ===========================================
find()
=========================================== */
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the tasting function undefined is returned.
const array4 = [2, 15, 4, 56, 8, 9, 90, 99];
const found = array4.find((element) => element > 10);
console.log(found);

// slice and splice methods the different 

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`A`, myArray); //A [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const myNewArray = myArray.slice(1, 3);
console.log(myNewArray); //[1, 2]
console.log(`B`, myArray); //B [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const myNewArray1 = myArray.splice(1, 3);
console.log(myNewArray1); // [1, 2, 3]
console.log(`C`, myArray); // C [0, 4, 5, 6, 7, 8, 9]





