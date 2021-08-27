// Características agregadas en ES9

// Operador de reposo
// Extrae las propiedades de un objeto que aún no se ha construido.

const obj = {
    name: 'Gerard',
    age: 27,
    country: 'MX'
};

// Extración de las propiedades:
let {country, ...all} = obj;
console.log(all);


// Otra característica es (utilizando la propiedad de propagación)
// Unir varios objetos en un solo objeto.

const obj1 = {
    name: 'Richard',
};

const obj2 = {
    ...obj1,
    country: 'US',
};

console.log(obj2);


// Otra caracteristica es: promise.finally
// Nos sirve para saber cuando a terminado el llamado y poder
// ejecutar una función

const helloCountry = () => {
    return new Promise((resolve, reject) => {
        (true)
            ?resolve('Hello MX.')
            :reject(new Error('Test error.'))
    });
}

helloCountry()
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))
.finally(() => console.log('Promesa finalizada'));


// REGEX en ES9:

const regexData = /([0-2]{1}[0-9]{3})-([0-1]{1}[0-9]{1})-([0-3]{1}[0-9]{1})/;
const match = regexData.exec('2021-08-25');

const zero = match[0];
console.log(zero);
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);


