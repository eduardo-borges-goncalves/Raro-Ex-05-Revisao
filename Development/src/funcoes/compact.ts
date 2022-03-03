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
 export const compact = (items: unknown[]): unknown[] => {

  let arrayCopy = [...items]
  let resultado = []

  for (let element of arrayCopy) {
    if (element) resultado.push(element)
  }

  return resultado;
};