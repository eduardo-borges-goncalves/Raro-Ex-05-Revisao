import { rejects } from 'assert';
import { writeFile, readFile } from 'fs';
import { resolve } from 'path';

let ARQUIVO_DE_FILA:string = `${resolve('.')}/files/fila.txt`;
  
/**
 * Os métodos escritos abaixo implementam uma fila de mensagens escritas em
 * arquivo de texto, presente na pasta "files". A cada mensagem escrita nesta fila,
 * (através do método `escreveNaFila`) o código escreve a frase ao final do arquivo.
 * O método `consumirDafila` retira a primeira mensagem escrita no arquivo e a retorna.
 *
 * As funções abaixo estão todas escritas utilizando callbacks como soluções
 * para a manipulação dos arquvos.
 *
 * Tranforme a solução escrita abaixo em um código válido utilizando promises ou
 * async/await.
 */

export async function zerarAquivo(): Promise<void> {
  return escreveArquivo('');
}

export async function leArquivo(): Promise<string> {

  return new Promise ((resolve, reject) => {
      readFile(ARQUIVO_DE_FILA, (err, data) => {
          err? reject(err) : resolve(String(data));
      });       
  });

}

export async function escreveArquivo(texto: string): Promise<void> {
 
  return new Promise ((resolve, reject) => {
      writeFile(ARQUIVO_DE_FILA, texto, "utf-8", err => {
          err? reject(err) : resolve();
      })
  })

} 

export async function escreveNaFila(texto: string): Promise<void> {

    let textoAtual:string = await leArquivo()
    
    const novoTexto:string = textoAtual ? `${textoAtual}\n${texto}` : texto;
    await escreveArquivo(novoTexto)
    
}

export async function consumirDaFila(): Promise<string> {
  
  let textoAtual:string = await leArquivo()
  const [linhaConsumida, ...linhas]:string[] = textoAtual.split('\n');
  await escreveArquivo(linhas.join('\n'))

  return linhaConsumida;
}