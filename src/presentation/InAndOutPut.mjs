import { compile } from "../domain/entities/compiler.mjs";

// This function is used to compile and run a mathematical expression
var calcula = compile("1-3") // This line takes a string representation of a mathematical expression as an argument

console.log(calcula);