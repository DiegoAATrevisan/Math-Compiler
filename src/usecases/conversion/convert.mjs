// This module provides functionality to convert a string to an array of integers and non-integer characters.
import { validarSeContemNumero } from "../detector/validator.mjs";

/**
 * This function iterates through the characters in a string.
 * If a character is a number, it converts the character to a number.
 *
 * @param {string} str - The string to convert.
 * @returns {(number | string)[]} - An array containing the converted integers and non-integer characters.
 */
export function converterParaInteiro(str) {

    // Initialize an empty array to store the converted characters.
    let arr = [];

    // Iterate through each character in the input string.
    for (let index = 0; index < str.length; index++) {

        // Check if the current character is a number.
        if (validarSeContemNumero(str[index])) {

            // If the character is a number, convert it to a number and add it to the array.
            arr.push(Number(str[index]));
        } else {

            // If the character is not a number, add it to the array as is.
            arr.push(str[index]);
        }
    }

    // Return the array containing the converted integers and non-integer characters.
    return arr;
}