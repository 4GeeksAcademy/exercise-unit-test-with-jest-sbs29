const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dolar son 146.26 yenes, entonces 3.5 dolares debe ser (3.5 * 146.26)
    const expected = 3.5 * 146.26;

    // Hago mi comparación (la prueba)
    expect(Number(fromDollarToYen(3.5).toFixed(2))).toBe(511.92);
})

test("One yen should be 0.005559 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 yen son 0.005559 libras, entonces 3.5 yen debe ser (3.5 * 0.00559)
    const expected = 3.5 * 0.005559;

    // Hago mi comparación (la prueba)
    expect(Number(fromYenToPound(3.5).toFixed(6))).toBe(0.019457);
})