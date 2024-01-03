// TypeScript Arrays

/* 

TypeScript has a specific syntax for typing arrays.



*/

const typeArr: string[] = [];

typeArr.push('Dylan');
typeArr.push('Bob');

console.log(typeArr);


/*
Readonly
The readonly keyword can prevent arrays from being changed.

*/

const readonlyArr:readonly string[] = ['Bob', 'Dylan']

// readonlyArr.push('AKD'); //Property 'push' does not exist on type 'readonly string[]'
console.log(readonlyArr);

