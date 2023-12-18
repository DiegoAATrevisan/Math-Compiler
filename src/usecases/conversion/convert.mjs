import { validarSeContemNumero } from "../detector/validator.mjs";


export function converterParaInteiro(str) {

    for (let index = 0; index < str.length; index++) {
        if (validarSeContemNumero(str[index])) {
            str[index] = Number(str[index]);
        }
    }
    return str;
}
