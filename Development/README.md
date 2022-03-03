# Prática 05 - revisão da semana

### 1. complete as funções

Na pasta `src/funcoes`, os arquivos listados abaixo definem funções utilitárias, que foram apenas definidas, através de sua assinatura e os comentários que as acompanham. Você deve completar as funções definidas, de forma que elas funcionem corretamente. Para testar estas funções, você pode utilizar as funções de `test...`, que estão construídas no arquivo `src/index.ts`. Caso houver algum erro de implementação das funções solicitadas, mensgens deverão aparecer em seu terminal indicando o erro.

funçoes:
- chunk.ts
- compact.ts
- fromPairs.ts
- uniq.t

**`Dica:`** Sugiro que você comente todas as funções, exceto aquela que você está trabalhando.

### 2. Promisificando um problema

O arquivo `src/funcoes/fila.ts` implementa uma fila de mensagens, onde existem operações já implementadas que deverão funcionar adicionando e removendo mensagens do arquivo `files/fila.txt`. Todos os métodos disponíveis neste módulo estão atualmente impelmentadas em formato de callbacks. Para cumprir esta tarefa, você deve implementar as funções de forma que elas sejam executadas de forma assíncrona. Da mesma forma que o primeiro exercício, você tem o `testFila`, que você poderá usar para garantir que sua implementação está correta.

### Proposta de exercício

Dado que existem uma série de métodos que você deverá implementar, sugiro que aproveite a prática para fazer um pouco da dinâmica do gitflow. Para isso, o caminho que sugiro é:

- criar no github um repositório para esta atividade.
- subir este repositório base para sua versão.
- criar uma issue para cada atividade a ser executada
  - chunk.ts
  - compact.ts
  - fila.ts
  - fromPairs.ts
  - uniq.t
- para implementar cada função, criar uma branch a parte. Após implementada, gerar um pull request para a branch principal do seu repositório.

## Instalação

Todas as bibliotecas necessárias para esta prática já estão adicionadas ao projeto. Desta forma, para iniciar o projeto, basta executar o comando abaixo, estando na pasta raiz deste repositório:

```sh
npm install
```

## comandos

Este projeto nasce com alguns comandos uteis para o desenvolvedor. Abaixo, uma breve descrição deles:

- `build`: comando responsável por transformar o código typescript em javascript, compreensível para o interpretador de node. A princípio, este comando será necessário apenas para o momento da publicação de nosso pacote.

Para executar qualquer um destes comandos, basta você executar, no terminal, o comando `npm run <nome-do-comando>`. Para executar o comando de build, por exemplo, você precisa executar um `npm run build`

## Estrutura do repositório

Este repositório possui dois diretórios principais: 
- `src`: pasta onde todas as funções deverão estar implementadas
