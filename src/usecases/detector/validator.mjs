export function validarSeContemNumero(str) {
    const regex = /[0-9]/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}
