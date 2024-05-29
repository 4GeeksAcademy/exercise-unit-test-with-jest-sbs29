const sum  = (a,b) => {
    return a + b
}
console.log(sum(7,3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    let euro = (dollar/oneEuroIs["USD"]);
    let yen = (euro*oneEuroIs["JPY"]);
    return yen;
}
console.log(fromDollarToYen(100000).toFixed(2) + " Yen");

const fromEuroToDollar = (euro) => {
    let dollar = (euro*oneEuroIs["USD"]);
    return dollar;
}
console.log(fromEuroToDollar(100000) + " Dollars");

const fromYenToPound = (yen) => {
    let euro = (yen/oneEuroIs["JPY"]);
    let pound = (euro*oneEuroIs["GBP"]);
    return pound;
}
console.log(fromYenToPound(100000).toFixed(2) + " Pounds");

module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };