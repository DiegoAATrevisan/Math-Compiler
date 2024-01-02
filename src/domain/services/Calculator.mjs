import { subtrai } from "./Subtracao.mjs"; // importa a função 'subtrai' da sub-módulo Subtracao
import { divide } from "./divisao.mjs"; // importa a função 'divide' da sub-módulo divisao
import { multiplica } from "./multiplicacao.mjs"; // importa a função 'multiplica' da sub-módulo multiplicacao
import { soma } from "./soma.mjs"; // importa a função 'soma' da sub-módulo soma

export function execOperacao(num1, num2, operador) { // função que recebe dois números e um operador para executar a operação desejada
    switch (operador) { // verifica qual operador foi informado e realiza a operação correspondente
        case "+": // se o operador for '+', a função 'soma' é chamada para realizar a soma dos dois números
            return soma(num1, num2); // retorna o resultado da soma
        case "-": // se o operador for '-', a função 'subtrai' é chamada para realizar a subtração dos dois números
            return subtrai(num1, num2); // retorna o resultado da subtração
        case "*": // se o operador for '*', a função 'multiplica' é chamada para realizar a multiplicação dos dois números
            return multiplica(num1, num2); // retorna o resultado da multiplicação
        case "/": // se o operador for '/', a função 'divide' é chamada para realizar a divisão dos dois números
            return divide(num1, num2); // retorna o resultado da divisão
    }
}