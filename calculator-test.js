
it('should calculate the monthly rate correctly', function () {
  const values  = {amount: 10000, years: 18, rate: 4.3};
  expect(calculateMonthlyPayment(values)).toEqual('66.58');
});

it("should return a result with 2 decimal places", function() {
  const values  = {amount: 10723, years: 13, rate: 5.7};
  expect(calculateMonthlyPayment(values)).toEqual('97.48');
});

it("should handle high values", function() {
  const values  = {amount: 4258723, years: 33, rate: 68.3};
  expect(calculateMonthlyPayment(values)).toEqual('242392.32');
});

it("should handle low values", function() {
  const values  = {amount: 0.5, years: 2, rate: 2.5};
  expect(calculateMonthlyPayment(values)).toEqual('0.02');
});
