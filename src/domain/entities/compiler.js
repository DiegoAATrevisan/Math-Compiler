function compile(calculo) {
    const converterParaInteiro = require('./usecases/conversion/Convert.js');
    const validarSeContemNumero = require('./usecases/conversion/Validator.js')
    calculo = (calculo.split(""));
    calculo = converterParaInteiro(calculo);
    let num1;
    let num2;
    let operador;
    for (const iterator of calculo) {
        if (validarSeContemNumero(iterator) && num1 == "") {
            num1 = iterator;
        } else if (validarSeContemNumero(iterator) && num2 != "") {
            num2 = iterator;
        } else {
            operador = iterator;
        }
    }
    return execOperacao(num1, num2, operador);

}