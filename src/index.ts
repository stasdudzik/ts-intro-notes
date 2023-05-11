function calculateTax(income: number, taxYear = 2022): number {
  //   let x; no unused locals
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000, 2022);
calculateTax(10_000);
