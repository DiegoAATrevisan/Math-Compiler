export function execOperacao(num1, num2, operador) {
    switch (operador) {
        case "+":
            return soma(num1, num2);
            break;
        case "-":
            return subtrai(num1, num2);
            break;
        case "*":
            return multiplica(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            break;
    }
}