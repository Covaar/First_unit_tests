
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("One dollar should be 106,58 Yen", function () {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBe(106.58);
})
test("600 Yen should be 3.75 Pounds", function () {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(600)).toBe();
})