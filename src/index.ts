let numbers: number[] = [1, 2, 3];
let anyArray = [];
// intellisense! when ts knows it's array of numbers it will suggest using number methods!
numbers.forEach(n => n.toFixed())
// if array is of type any as empty array with no specified type - no suggestions will be given
anyArray.forEach(n=> n.)
