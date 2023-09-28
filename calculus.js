
const nerdamer = require('nerdamer/all.min');

/*
require('nerdamer/Algebra'); 
require('nerdamer/Calculus'); 
const nerdamer_solve = require('nerdamer/Solve');
require('nerdamer/Extra');
*/

// Solve a equation, return the result
// This code solves the equation
// 3x^2 + 2x + 1 = 0
// for x
function solveEquation(equation) {
    // Solve the equation
    return nerdamer.solveEquations(equation, 'x');
}

module.exports = { solveEquation };
