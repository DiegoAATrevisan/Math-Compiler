import { subtrai } from "./Subtracao.mjs";
import { divide } from "./divisao.mjs";
import { multiplica } from "./multiplicacao.mjs";
import { soma } from "./soma.mjs";

export function execOperacao(num1, num2, operador) {
    switch (operador) {
        case "+":
            return soma(num1, num2);
        case "-":
            return subtrai(num1, num2);
        case "*":
            return multiplica(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}