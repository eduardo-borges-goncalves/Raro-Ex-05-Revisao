import { KeyAndValue } from "../types/keyAndValue";
import { chunk } from "./funcoes/chunk";
import { compact } from "./funcoes/compact";
import { fromPairs } from "./funcoes/fromPairs";
import { uniq } from "./funcoes/uniq";
import { consumirDaFila, escreveNaFila, leArquivo, zerarAquivo } from "./funcoes/fila";


function testChunk() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const original = [...items];

  // chamada ao método.
  const chunked = chunk(items, 3);

  // o array original não pode ser alterado.
  const naoAlterados = original.every((item, index) => item === items[index]);

  // verificação do método.
  console.assert(naoAlterados, 'O array original não pode ser alterado');
  console.assert(chunked.length === 4, 'array deve ter 4 grupos');
  console.assert(chunked[0].length === 3, 'primeiro grupo deve ter 3 itens');
  console.assert(chunked[1].length === 3, 'segundo grupo deve ter 3 itens');
  console.assert(chunked[2].length === 3, 'terceiro grupo deve ter 3 itens');
  console.assert(chunked[3].length === 1, 'quarto grupo deve ter 1 item');
}

function testCompact() {
  const items = [0, 1, false, 2, '', 3, null, undefined, '0'];
  const original = [...items];
  const expected = [1, 2, 3, '0'];
  
  // chamada ao método.
  const resultado = compact(items);
  
  // o array original não pode ser alterado.
  const naoAlterados = original.every((item, index) => item === items[index]);

  // os itens truthy devem ser mantidos no array resultado.
  const resultadoCorreto = expected.every((item, index) => item === resultado[index]);

  // verificação do método.
  console.assert(naoAlterados, 'array original não pode ser alterado');
  console.assert(resultadoCorreto, 'todos os objetos esperados devem estar presentes');
}

function testFromPairs() {
  const items: KeyAndValue[] = [
    ['name', 'Edgar Allan Poe'],
    ['age', 40],
    ['alive', false]
  ];
  const esperado = {
    name: 'Edgar Allan Poe',
    age: 40,
    alive: false
  };

  // chamada ao método.
  const resultado = fromPairs(items);

  // verificação do método.
  const correto = Object.keys(esperado).every(key => esperado[key] === resultado[key]);
  console.assert(correto, 'todos os objetos esperados devem estar presentes');
}

function testUniq() {
  const items = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];
  const original = [...items];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const resultado = uniq(items);

  // verificação do método.
  const naoAlterados = original.every((item, index) => item === items[index]);
  const resultadoCorreto = expected.every((item, index) => item === resultado[index]);
  console.assert(naoAlterados, 'array original não pode ser alterado');
  console.assert(resultadoCorreto, 'todos os objetos esperados devem estar presentes');
}

async function testFila() {
  await zerarAquivo();
  const mensagens = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'Quisque scelerisque pulvinar lacus',
    'ut elementum justo commodo',
    'Nulla ac ullamcorper sapien,',
    'Pellentesque euismod pharetra erat',
    'eget commodo ex sodales ut',
    'Suspendisse porttitor sed felis sit amet molestie',
    'In sit amet gravida quam',
    'Nulla vitae nisl a nibh luctus tincidunt',
  ];

  for (const mensagem of mensagens) {
    await escreveNaFila(mensagem);
  }

  const mensagensEscritas = await leArquivo(() => {});
  const todasMensagensEscritas = mensagensEscritas
    .split('\n')
    .every((mensagem, index) => mensagem === mensagens[index]);

  console.assert(todasMensagensEscritas, 'todas as mensagens devem ser escritas');
  for (const menssagem of mensagens) {
    const encontrada = await consumirDaFila();
    console.log(encontrada);
    console.assert(encontrada === menssagem, 'mensagem esperada não encontrada');
  }
}

testChunk();
testCompact();
testFromPairs();
testUniq();
testFila();