# Typescript
 - Fundamentos do Typescript
---
# Configurando o Setup:
  - Instalar o Node -> https://nodejs.org
  - Instalar o GIT ->  https://git-scm.com/downloads

  Após, configure seu editor de texto:

  Sincronizar as moficações dos arquivos com um repositório.
  ```js
  git init
  ```
  Criar o arquivo 'package.json'
  ```js
  npm init
  ```
  Criar o arquivo '.gitignore' em seu diretório e adicionar o 'node_modules', arquivo gerado na instalação do pacote npm.
  
  Intalar o pacote npm com Typescript:
  ```js
  npm install typescript
  ```
  Adicionar o script tsc no arquivo 'package.json'
  ```js
  "scripts": {
  "tsc": "tsc"
  }
  ```
  Rodar o comando: Arquivo 'tsconfig.json' 
  ```js
  npm run tsc -- --init
  ```
  Instalar a dependência 'ts-node-dev'
  ```js
  npm install ts-node-dev --save-dev
  ```
  Configurar o script para buildar o seu código:
  ```js
{
  "name": "fundamentos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tsc": "tsc",
    "dev": "ts-node-dev --respawn"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.5.4"
    }
}
```
Quando for compilar seus arquivos, rodar:
```js
npm run dev 'arquivo ou pasta seguido do arquivo que está nela'