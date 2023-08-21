// push methods
let bangla_heros = ['Sakib Khan', 'Bappi', 'Arifen Suvo', 'Jovan'];
let indian_heros = ['Dev', 'Jit', 'Ankus', 'Proson Jit'];
bangla_heros.push(indian_heros);
console.log('push methoods', bangla_heros);

// concat methods
let bangla_heros1 = ['Sakib Khan', 'Bappi', 'Arifen Suvo', 'Jovan'];
let indian_heros1 = ['Dev', 'Jit', 'Ankus', 'Proson Jit'];
let all_heros = bangla_heros.concat(indian_heros);
console.log('concat methods', all_heros);

// nam janina array
let bangla_heros2 = ['Sakib Khan', 'Bappi', 'Arifen Suvo', 'Jovan'];
let indian_heros2 = ['Dev', 'Jit', 'Ankus', 'Proson Jit'];
let allHeros = [...bangla_heros, ...indian_heros];
console.log(allHeros);

// isArray methods and from array methods
console.log(Array.isArray('Jahir'));
console.log(Array.from('Jahir'));
console.log(Array.from({ name: 'Jahir' })); // interesting array

// Array.of() is methods return new array. akhane onek gula srting ke array te rupantor kora jai
let name1 = 'Jahir';
let name2 = 'Mijan';
let name3 = 'Jahid';
let name4 = 'Imran';
let name5 = 'Saifulla';
let allName = Array.of(name1, name2, name3, name4, name5);
console.log(allName);