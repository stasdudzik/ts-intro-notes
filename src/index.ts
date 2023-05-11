type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }

//better use OPTIONAL PROPERTY ACCESS OPERATOR
console.log(customer?.birthday?.getFullYear());

// Optional element access operator for accessing array elements
// customers[0]
// customers?.[0]

// Optional call - only execute function if its different then null or undefined!

let log: any = null;
log?.("a");
