// Object.entries
// Devolver la clave y los valores de una matriz.

const data = {
    frontend: 'oscar',
    backend: 'gerard',
    desing: 'ana',
}

const entries = Object.entries(data);
console.log(entries);

// ¿Cuántos elementos tiene un objeto? con la ayuda de entries:

console.log(entries.length);



const data2 = {
    frontend: 'oscar',
    backend: 'gerard',
    desing: 'ana',
}

const values = Object.values(data2);
console.log(values);


// Async y Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello, World!'), 3000)
        : reject(new Error('Test error 1'))
    })
};


const helloAsync = async () => {
    const hello = await helloWorld();
    const bye = await helloWorld();
    console.log(hello);
    console.log(bye);
};

helloAsync();

// Forma correcta de utilizar ASYNC y promesas con try/catch

const anotherHelloAsync = async () => {
    try {
        const hello = helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};
