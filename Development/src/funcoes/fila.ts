import { rejects } from 'assert';
import { writeFile, readFile, readdirSync, readFileSync} from 'fs';
import { resolve } from 'path';

let ARQUIVO_DE_FILA = `${resolve('.')}/files/fila.txt`;
  
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

export function leArquivo(): Promise<string> {

  return new Promise ((resolve, reject) => {
      readFile(ARQUIVO_DE_FILA, function(err, data) {
          err? reject(err) : resolve(String(data));
      });       
  });
  // reste return está presente somente para cumprir a saída de Promise<string>
  //return '';
}

export async function escreveArquivo(texto: string): Promise<void> {
 
  return new Promise ((resolve, reject) => {
      writeFile(ARQUIVO_DE_FILA, texto, "utf-8", function(err, data) {
          err? reject(err) : resolve(data);
      })
  })
  //console.log('texto escrito no arquivo', texto); 
} 

export async function escreveNaFila(texto: string): Promise<void> {
    leArquivo()
    .then(textoAtual => { 
      console.log('texto encontrado anteriormente no arquivo', textoAtual);
      const novoTexto = textoAtual ? `${textoAtual}\n${texto}` : texto;
      escreveArquivo(novoTexto)
    }).then (textoFinal => {
      console.log("texto escrito ",textoFinal)  
    })

}

export async function consumirDaFila(): Promise<string> {
  // leArquivo(function(error, textoAtual) {
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }

  //   console.log('texto encontrado anteriormente no arquivo', textoAtual);
  //   const [linhaConsumida, ...linhas] = textoAtual.split('\n');
  //   console.log('======== linha consumida', linhaConsumida);

  //   escreveArquivo(linhas.join('\n'), function(error) {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }

  //     console.log('texto escrito no arquivo');
  //   });
  // });

  return '';
}
