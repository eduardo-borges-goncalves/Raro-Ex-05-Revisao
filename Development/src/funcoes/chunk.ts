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
export const chunk = (valores: number[], tamanho: number): number[][] => {

  let arrayCopy = [...valores]
  let block = []
  let resultado = []

  // a gente tem os 5 elementos do arrayCopy, e temos o tamanho 2, o 2 deve ser um 
  // parametro a ser atingido, algo assim, então, podemos dizer algo como index igual ]
  // a zero, e iterar em cima disso. adicionamos o elemento do array ao array 
  // resultado, e no mesmo laço, já retiramos ele do arrayCopy, right. 

  while (arrayCopy.length > 0) {
    block = []
    for ( let i = 0; i < tamanho; i++ ) {
      if (arrayCopy[0] !== undefined) {
        block.push(arrayCopy[0]);
        arrayCopy.shift();
      }
    }
    resultado.push(block);
  }

  return resultado;
};