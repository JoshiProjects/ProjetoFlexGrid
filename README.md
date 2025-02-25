# Projeto FlexBox e Grid

 Criei esse projeto visando mostrar como funciona minha linha de raciocínio com relação ao funcionamento e organização de layouts responsivos.😊

## Como fazer os layout FlexBox

Como vc conseguiu visualizar quando clicou no botão FlexBox, todos os quadrados estão com um espaçamento padrão e houve a quebra de linha, para vc conseguir fazer isso deverá usar flex-wrap e outras propriedades, veja abaixp.


```css
.container {
  display: flex;
  flex-wrap: wrap; /* Permite quebrar para a próxima linha */
  justify-content: space-around; /* Espaçamento igual entre os itens */
  align-items: center; /* Alinha os itens verticalmente */
  width: 200px; /* Largura do container */
  height: 200px; /* Altura do container */
}
/* os códigos abaixo seriam somente para se parecer com o que vc viu no site */
.item {
  width: 45%;
  height: 45%; 
  margin: 5px;
}

.vermelho {
  background-color: red;
}

.azul {
  background-color: blue;
}

.verde {
  background-color: green;
}

.amarelo {
  background-color: yellow;
}
```

- **display: flex;**  :Transforma o elemento .container em um contêiner flexível.
- **flex-wrap: wrap;** :Permite que os itens sejam quebrados para a próxima linha, caso não caibam na largura do contêiner.
- **justify-content: space-around;** : Distribui os itens ao longo do eixo principal (horizontal), com espaço igual entre eles e nas extremidades.
- **align-items: center;** : Alinha os itens verticalmente ao centro do contêiner.

## Como fazer os layout Grid
  Para fazer o leyout de quando vc clica no botão grid, precisamos somente estabelecermos os valores de duas propriedades, as que se referem a coluna e linhas, veja o exemplo abaixo.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas de igual tamanho */
  grid-template-rows: 1fr 1fr; /* Duas linhas de igual tamanho */
  gap: 10px; /* Espaçamento entre os itens */
  width: 200px; /* Largura do container */
  height: 200px; /* Altura do container */
}
```

- **display: grid;** : Transforma o elemento .container em um contêiner de grid.
- **grid-template-columns: 1fr 1fr;** : Define duas colunas com a mesma largura, utilizando a unidade fr (fração).
- **grid-template-rows: 1fr 1fr;** : Define duas linhas com a mesma altura, utilizando a unidade fr.
- **gap: 10px;** : Define um espaçamento de 10 pixels entre as células do grid.

  

  ### Caso vocês tenham alguma dificuldade em abrir o site, primeiro me informe e a seguir irei te mostrar como executar esse projeto localmente.

  #### Pré-requisitos

 - Node.js: Certifique-se de ter o Node.js instalado (versão 14 ou superior). Você pode baixá-lo em nodejs.org.
 - npm ou Yarn: Este projeto usa npm (Node Package Manager) ou yarn para gerenciamento de pacotes. Se você não tiver o npm instalado, ele vem com o Node.js. Se você preferir usar o yarn, instale-o globalmente com npm install -g yarn.
 - Editor de código: Recomenda-se usar um editor de código como Visual Studio Code, que oferece bom suporte para TypeScript e React.

## Primeiro passo

  Faça um clone desse projeto.

```Bash
git clone <Copiem a URL do repositório aqui>
cd <Nome da Pasta>
```
## Segundo passo

  Instale as dependências do projeto.

Com npm:
```Bash
npm install
```
Com yarn:
```Bash
yarn install
```

## Terceiro passo

  Executar o projeto iniciando o servidor de desenvolvimento.

Com npm:
```Bash
npm run dev
```
Com yarn:
```Bash
yarn dev
```
  Abra o navegador: O projeto será executado em http://localhost:5173/ (ou outra porta disponível, observe a saída do seu terminal).
   

  
