type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Staszek",
  retire: (date: Date) => console.log(date),
};
// employee.id = 453; readonly property does not allow reassigning this property
