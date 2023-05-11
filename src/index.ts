// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}

// will automatically assign 1,2,3 if we dont specify values
let mySize: Size = Size.Medium;
console.log(mySize);
