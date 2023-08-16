// The toString() returns a string with array values separated by commas. And it dose not change the original array.

//(1) array.toString()  //Syntax.
let bikes = ['Yamaha', 'Bajaj', 'Honda', 'TVS'];
console.log(bikes.toString());
//returns this value: 'Yamaha,Bajaj,Honda,TVS'.


// The join() returns a new string by concatenating all of the elements in an Array,separated by commas or a specified separator string.
// (2)Array.join(separator); // Syntax

console.log(bikes.join());
// Expected output: 'Yamaha,Bajaj,Honda,TVS'

console.log(bikes.join(""));
// Expected output: 'YamahaBajajHondaTVS'

console.log(bikes.join("-"));
// Expected output: 'Yamaha-Bajaj-Honda-TVS'