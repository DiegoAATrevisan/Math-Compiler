function converterParaInteiro(str) {
    const validarSeContemNumero = require('.usecases/validator.js')

    for (let index = 0; index < str.length; index++) {
        if (validarSeContemNumero(str[index])) {
            str[index] = Number(str[index]);
        }
    }
    return str;
}

module.exports = converterParaInteiro;