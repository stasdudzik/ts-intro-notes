function greet(name: string | undefined | null) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("HOLA!");
  }
}
greet(null);
greet("Piotr");
greet(undefined);
