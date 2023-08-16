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
console.log(ary);
str.sort();
console.log(str);

/* ===========================================
splice()
=========================================== */
// The splice() Method adds and /or removes array Elements. The splice() method overwrites the orginal array
// array1.splice(index,Howmany, items1, ..., itemX)

let number = [99, 100, 22, 43, 55];
number.splice(2, 3, 'a', 'b', 'c');
console.log(number);