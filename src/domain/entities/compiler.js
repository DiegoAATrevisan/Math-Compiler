import { converterParaInteiro } from "../../usecases/conversion/convert";
import { validarSeContemNumero } from "../../usecases/detector/validator";
import { execOperacao } from "../services/Calculator";
export function compile(calculo) {
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
    if (num1 == "" || num2 == "" || operador == "") {
        throw new Error("Erro de sintaxe");
    } else {
        return execOperacao(num1, num2, operador);
    }
}