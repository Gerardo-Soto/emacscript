// Método flat agregado en ES10

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array);
console.log(array.flat(1));
console.log(array.flat(2));


// Método flat.map

let duplicar = [1, 2, 3, 4, 5];

console.log(duplicar.flatMap(currentNumber => [currentNumber, currentNumber * 2]));



// Elimirar espacios de un String

let hello = '      hello, world';
console.log(hello);
console.log(hello.trimStart());

let bye = 'bye, world!       ';
console.log(bye);
console.log(bye.trimEnd());


// Optional cash building

try {
    
} catch /*(error)*/ {
    error;
}


// fromEntries

let entries = [["name", "Gerard"], ["age", 27]];
console.log(Object.fromEntries(entries));

let newObject = Object.fromEntries(entries);
console.log(newObject);


// Symbols

let mySymbol = `techniques for using the latest EMACScript10 features.`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);

