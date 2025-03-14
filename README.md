<h1 align="center">Arquetipo Angular Pragma</h1>
<div>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/cea4d0f148a7a46b43ab1bf84c7f4e456a166e09/tecnologias/pragma_solido_ok.png?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/cea4d0f148a7a46b43ab1bf84c7f4e456a166e09/tecnologias/pragma_blanco_ok.png">
    <img alt="Logo Pragma" src="https://raw.githubusercontent.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/cea4d0f148a7a46b43ab1bf84c7f4e456a166e09/tecnologias/pragma_blanco_ok.png" width="250px" height="50px">
  </picture>
</div>

<h2 align="center">Angular | La plataforma moderna para el desarrollo web.</h2>




<p align="center">
  <img src="https://img.shields.io/badge/Angular-v15-red?logo=angular" />
  <img src="https://img.shields.io/badge/Standalone-Components-blue" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>


<p align="center">
  <img src="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/56dde5d42a52d5a25e890c03785a28c9047b2263/tecnologias/angular_ok.png?raw=true" alt="angular-logo" width="300px" height="100px"/>

  <img src="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/56dde5d42a52d5a25e890c03785a28c9047b2263/tecnologias/eslint_ok.png?raw=true" alt="eslint-logo" width="100px" height="100px"/>

  <img src="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/56dde5d42a52d5a25e890c03785a28c9047b2263/tecnologias/jest_ok.png?raw=true" alt="jest-logo" width="100px" height="100px"/>

  <img src="https://github.com/fernando-jaramillo-pragma/fernando-jaramillo-pragma/blob/56dde5d42a52d5a25e890c03785a28c9047b2263/tecnologias/prettier_ok.png?raw=true" alt="prettier-logo" width="100px" height="100px"/>

  <br>
  <br>

  <i>Angular es una plataforma de desarrollo para crear aplicaciones web móviles y de escritorio <br> utilizando Typescript/JavaScript y otros lenguajes</i>
  <br>
</p>

<p align="center">
  <a href="https://angular.io/docs" target="_blank">
    <strong>www.angular.io</strong>
  </a>
  <br>
</p>


# Angular CLI

Este proyecto ha sido genereado con [Angular CLI](https://github.com/angular/angular-cli) versión 18

Este proyecto trabaja bajo Angular v18 mediante STANDALONE,puede revisar las TAGs o Ramas del respositorio actual para ver las versiones disponibles.


#### Requerimientos y dependencias

|  package use  |  version  |
|---------------|-----------|
|  Angular CLI  |  18.2     |
|  Node         |  20.1     |
|  Npm          |  10.8     |


## Clonando el Repositorio

Puede realizar el clonado segun la version y rama respectiva, si no desea conservar historial de commits sugerimos:

```bash 
git clone --depth=1 --branch <nombre-rama> <URL_DEL_REPO>
``` 


## Servidor de Desarrollo

Ejecute `ng serve` o `npm run start` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente. Admite componentes independientes.

```bash 
ng serve
``` 

```bash
npm start
``` 


## Aruitectura de Codigo.

Ejecute `ng generate component component-name --standalone` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`. Tenga en cuenta el uso del principio LIFT para Angular, puede ver más información [aquí](https://pragma.workplace.com/work/knowledge/3162767777360606) o use la extensión Angular schematics para Visual Studio Code.


## Build

Ejecute `npm run build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecutando Test Unitarios

Para ejecutar las pruebas unitarias a través de [JEST](https://jestjs.io/docs/getting-startedo). De forma predeterminada, AppComponent evalúa 3 pruebas unitarias. Cada componente debe contener pruebas unitarias y una covertura minima del 70%. 

Ejeucte los comandos según corresponda:

```bash 
npm run test
``` 
```bash 
npm run test:watch
``` 

```bash 
npm run test:coverage
``` 

## ESLint - Prettier

ESLint y Prettier te ayudan a mantener tu código limpio y legible, lo que a su vez te ayuda a reducir errores y mejorar la calidad de tu código. Por defecto este proyecto ya contiene las configuraciones necesarias, las reglas de ESLint en el archivo .eslintrc.json según las necesidades de Pragma.

Ejeucte los comandos según corresponda:

```bash 
npm run lint
``` 

```bash
npm run lint-all 
``` 

```bash
npm run lint-watch
``` 

Para obtener el mejor rendimiento, debes haber instalado y configurado las extensiones necesarias y/o recomendadas:
- **ESLint** -> vscode-eslint
- **Error Lens** -> usernamehw.errorlens
- **Prettier - Code formatter** -> esbenp.prettier-vscode

## Branch, Commits y GIT

Para la creación de Branch revise la estrategia de Branching Adecuada para el proyecto. 
Para la generación de commits haga uso de Conventional Commits puede consultar mas [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Este proyecto usa Husky

Husky es una herramienta que ayuda a gestionar Git hooks en proyectos, permitiendo ejecutar scripts automáticamente antes de commits, pushes u otras acciones de Git. Se usa comúnmente para asegurarse de que el código sigue ciertas reglas antes de ser enviado al repositorio.

Husky suele configurarse para tareas como:

Ejecutar linters o formatters antes de hacer commit (ej. eslint, prettier).
Correr pruebas automáticamente antes de hacer push.
Evitar commits con errores asegurando que el código cumple ciertos estándares.


🛠️ Hook pre-commit (Husky)
Este archivo es un hook de Husky que se ejecuta automáticamente antes de realizar un commit en Git.

🔍 **¿Qué hace?**
- Corrige errores de formato (npm run lint:fix).
- Verifica el código con el linter (npm run lint).
- Reagrega archivos después de corregir el formato (git add .).
- Ejecuta pruebas antes del commit (npm run test).

⚠️ **Importante**
Si hay errores de linting o fallan las pruebas, el commit no se realizará hasta que los corrijas. 🚀

## Documentación con Compodoc

Este proyecto utiliza **Compodoc** como herramienta de documentación para Angular, basada en JSDoc. Para generar y visualizar la documentación del proyecto, ejecute el siguiente comando:

```bash
npm run compodoc:build-and-serve
``` 

Además, puede encontrar información adicional en nuestro espacio de trabajo:  [Compodoc | Workplace](https://pragma.workplace.com/work/knowledge/3174035239567193)

## Soporte de CLI

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Angular CLI Overview and Command Reference](https://angular.io/cli).

Puede consultar la WIKI del arquetipo. [Arquetipo Pragma WIKi](https://gitlab.com/pragma-arquetipos-front/arquetipo-angular-pragma/-/wikis/home)

## Expressions of Gratitude 🎁

<b>"El talento no solo hay que encontrarlo, hay que guiarlo en la dirección correcta."</b> Pragma

## Author 🤖

PRAGMA 💜
