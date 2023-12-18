import { converterParaInteiro } from "../../usecases/conversion/convert.mjs";
import { validarSeContemNumero } from "../../usecases/detector/validator.mjs";
import { execOperacao } from "../services/Calculator.mjs";
export function compile(calculo) {
    calculo = (calculo.split(""));
    calculo = converterParaInteiro(calculo);
    let num1 = "default";
    let num2 = "default";
    let operador;
    for (const iterator of calculo) {
        if (validarSeContemNumero(iterator) && num1 == "default") {
            num1 = iterator;
        } else if (validarSeContemNumero(iterator) && num2 == "default") {
            num2 = iterator;
        } else {
            operador = iterator;
        }
    }
    if (num1 == "" || num2 == "" || operador == "") {
        throw new Error("Erro de sintaxe");
    } else {
        return execOperacao(num1, num2, operador);
    }
}