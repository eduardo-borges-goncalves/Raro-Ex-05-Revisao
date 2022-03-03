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
exports.compact = void 0;
/**
 * Remove todos os valores "falsy" da lista de itens. Lembrando que false, 0, '',
 * null e undefined são valores falsy.
 *
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
var compact = function (items) {
    var arrayCopy = __spreadArray([], items, true);
    var resultado = [];
    for (var _i = 0, arrayCopy_1 = arrayCopy; _i < arrayCopy_1.length; _i++) {
        var element = arrayCopy_1[_i];
        if (element)
            resultado.push(element);
    }
    return resultado;
};
exports.compact = compact;
