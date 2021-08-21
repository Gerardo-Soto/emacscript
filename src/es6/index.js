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

