// import necessary dependencies
import { converterParaInteiro } from "../../usecases/conversion/convert.mjs";
import { validarSeContemNumero } from "../../usecases/detector/validator.mjs";
import { execOperacao } from "../services/Calculator.mjs";

/**
 * compile function to parse, validate, and calculate a given calculation
 * @param {string} calculo - the calculation string
 * @returns {number} result - the result of the calculation
 */
export function compile(calculo) {
    // convert calculation string to an array of numbers
    calculo = (calculo.split("")).map(Number);

    // validate calculation and throw an error if it contains any invalid characters
    if (!calculo.every(validarSeContemNumero)) {
        throw new Error("Erro de sintaxe");
    }

    // parse and separate the numbers and the operator
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

    // validate calculation and throw an error if it's not valid
    if (num1 == "" || num2 == "" || operador == "") {
        throw new Error("Erro de sintaxe");
    }

    // execute the operation and return the result
    return execOperacao(num1, num2, operador);
}