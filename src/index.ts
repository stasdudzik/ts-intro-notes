// ts will detect we cannot give 3 elements to 2 element tuple
// let user: [number, string] = [1, "Staszek", 0];

let user: [number, string] = [1, "Staszek"];
//intellisense will suggest methods for different types in a tuple depending on index!
// user[0].
user[1];

// ts tuple type compiles to regular js Array
// its a good idea to restrict tuples to 2 elements in general in JS
