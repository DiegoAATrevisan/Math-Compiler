function validarSeContemNumero(str) {
    const regex = /\d/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

module.exports = validarSeContemNumero;