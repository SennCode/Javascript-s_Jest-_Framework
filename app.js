const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    let valueInYenes = valueInDollar * 0.0069;

    return valueInYenes;
}

const fromYenToPound = function (valueInYenes){
    let valueInLibras = valueInYenes * 0.0062;

    return valueInLibras;
}

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };