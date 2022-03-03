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
exports.uniq = void 0;
/**
 * Retorna um array com todos os elementos únicos.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
var uniq = function (args) {
    var result = __spreadArray([], args, true);
    for (var index = 0; index < result.length; index++) {
        for (var j = 1; j < result.length; j++) {
            var item = result[index];
            var comparedItem = result[j];
            var equalItems = index !== j && item === comparedItem;
            if (equalItems)
                result.splice(j, 1);
        }
    }
    return result;
};
exports.uniq = uniq;
