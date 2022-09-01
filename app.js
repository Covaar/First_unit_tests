const fromEuroToDollar = function (Euro) {
    let valueInDollar = Euro * oneEuroIs.USD;
    return Number(valueInDollar.toFixed(2));
}
const fromDollarToYen = function (Dollar) {
    let valueInYen = (Dollar / oneEuroIs.USD )* oneEuroIs.JPY ;
    return Number(valueInYen.toFixed(2));

}
const fromYenToPound = function (Yen) {
    let valueInYen = (Yen/ oneEuroIs.JPY )* oneEuroIs.GBP;
    return Number(valueInYen.toFixed(2));

}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3));
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(600));

module.exports = { sum, fromEuroToDollar ,fromDollarToYen, fromYenToPound }



