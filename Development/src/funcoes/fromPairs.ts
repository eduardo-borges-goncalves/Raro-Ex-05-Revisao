import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */

export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  let result = {}

  for (let argument of args) {
    result[argument[0]] = argument[1]
  }
  return result;
};