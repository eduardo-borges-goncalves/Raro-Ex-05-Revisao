/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  let result = [...args]
  
  for (let index = 0; index < result.length; index++) {
    for ( let j = 1; j < result.length; j++) {

      let item = result[index]
      let comparedItem = result[j] 
      let equalItems = index !== j && item === comparedItem

      if ( equalItems ) result.splice(j, 1)
    }
  }
  return result;
};

