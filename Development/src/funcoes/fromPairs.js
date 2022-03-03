"use strict";
exports.__esModule = true;
exports.fromPairs = void 0;
/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */
var fromPairs = function (args) {
    var result = {};
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var argument = args_1[_i];
        result[argument[0]] = argument[1];
    }
    return result;
};
exports.fromPairs = fromPairs;
