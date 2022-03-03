"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.chunk = void 0;
/**
 * Cria um array de grupos de elementos divididos em tamanho
 * máximo igual ao parâmetro "tamanho". O último elemento deste
 * novo array deverá conter o restante dos itens,
 * caso a divisão não seja perfeitamente correta.
 *
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 *
 * ex.: chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 *
 * @param valores array de números que deverão ser quebrados em grupos.
 * @param tamanho numero que representa o tamanho máximo de cada grupo.
 * @returns
 */
var chunk = function (valores, tamanho) {
    var arrayCopy = __spreadArray([], valores, true);
    var block = [];
    var resultado = [];
    // a gente tem os 5 elementos do arrayCopy, e temos o tamanho 2, o 2 deve ser um 
    // parametro a ser atingido, algo assim, então, podemos dizer algo como index igual ]
    // a zero, e iterar em cima disso. adicionamos o elemento do array ao array 
    // resultado, e no mesmo laço, já retiramos ele do arrayCopy, right. 
    while (arrayCopy.length > 0) {
        block = [];
        for (var i = 0; i < tamanho; i++) {
            if (arrayCopy[0] !== undefined) {
                block.push(arrayCopy[0]);
                arrayCopy.shift();
            }
        }
        resultado.push(block);
    }
    return resultado;
};
exports.chunk = chunk;
