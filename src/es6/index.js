// emac5- : Declaración de funciones con parametros

function newFuncion(username, age, country) {
    var username = username || 'Default';
    var age = age || 0;
    var country = country || 'MX';
    console.log(username, age, country);
};

// emacScript6+

function newFunction6(name = 'Default', age = 0, country = 'MX') {
    console.log(name, age, country);
};

// llamar a la función:
newFunction6();
newFunction6('Gerardo', 27, 'US');


// Template Literals: Separar o unir varios elementos

let hello = "Hello";
let world = "World";

// EMACScript 5-
let epicphrase = hello + ' ' + world;
console.log(epicphrase);

// EMACScript 6+
let epicphrase6 = `${hello} ${world}`;
console.log(epicphrase6);


// Multilineas

// EMACScript 5-
let lorem = "Qui consequartur. Commodi. Ipsum vel duis yet minima \n"
+ "Otra frase épica que necesitamos.";

// EMACScript 6+
let lorem2 = `Qui consequartur. Commodi. Ipsum vel duis yet minima
Otra frase épica que necesitamos.`;

console.log(lorem);
console.log(lorem2);

// Desestructuración de elementos

let person = {
    'name': 'Gerard',
    'age': 27,
    'country': 'MX'
}
// Accediendo a los valores del objeto 
// EMACScript  5-
console.log(person.name, person.age);

// Desestructurar este elemento:
// EMACScript 6+
// v- crear una variable con los atributos del objeto
let {name, country} = person;
console.log(name, country);


// Operador de propagación / Spread Operator

let team1 = ['Yesenia', 'Gerard', 'Richard'];
let team2 = ['Karen', 'Rafa', 'Lessli'];

let education = ['David', ...team1, ...team2];



// let - Solo está disponible en el Scope

var globalScopeVar = "globalScopeVar";
let globalScopeLel = "globalScopeLel";
const globalScopeConst = "globalScopeConst";

{
    var blockScopeVar = "blockScopeVar";
    let blockScopeLet = "blockScopeLet";
    const blockScopeConst = "blockScopeConst";
    console.log(globalScopeVar);
    console.log(globalScopeLel);
    console.log(globalScopeConst);
}

console.log(blockScopeVar);
console.log(blockScopeLet);
console.log(blockScopeConst);


// Creación de un objeto

let firstName  = 'Gerard';
let age = 27;

// EMACScript 5-
obj = { firstName: name, age: age};

// EMACScript 6+
obj6 = {firstName, age};


// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Promesa cumplida!');
        }else{
            reject('No se cumplio la promesa.');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));


function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


