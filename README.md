<h1 align="center">Arquetipo Angular Pragma</h1>
<hr>
<h2 align="center">Angular | La plataforma moderna para desarrolladores web.</h2>

<p align="center">
  <img src="https://github.com/angular/angular/raw/main/aio/src/assets/images/logos/angular/angular.png" alt="angular-logo" width="123px" height="113px"/>

  <img src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.4.0/1675676105903/Microsoft.VisualStudio.Services.Icons.Default" alt="eslint-logo" width="105px" height="100px"/>

  <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="jest-logo" width="100px" height="100px"/>

  <img src="https://seeklogo.com/images/P/prettier-logo-D5C5197E37-seeklogo.com.png" alt="prettier-logo" width="92px" height="92px"/>

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

Este proyecto ha sido genereado con [Angular CLI](https://github.com/angular/angular-cli) versión 15

Este proyecto trabaja bajo Angular v15 mediante STANDALONE,puede revisar las TAGs o Ramas del respositorio actual para ver las versiones disponibles.


#### Requerimientos y dependencias

|  package use  |  version  |
|---------------|-----------|
|  Angular CLI  |  15.2     |
|  Node         |  18       |
|  Npm          |  9        |


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

## Documentación

Este proyecto utiliza **Compodoc** como herramienta de documentación para Angular, basada en JSDoc. Para generar y visualizar la documentación del proyecto, ejecute el siguiente comando:

```bash
npm run compodoc:build-and-serve
``` 

Además, puede encontrar información adicional en nuestro espacio de trabajo:  [Compodoc | Workplace](https://pragma.workplace.com/work/knowledge/3174035239567193)

## Soporte de CLI

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Angular CLI Overview and Command Reference](https://angular.io/cli).


## Expressions of Gratitude 🎁

<b>"El talento no solo hay que encontrarlo, hay que guiarlo en la dirección correcta."</b> Pragma

## Author 🤖

PRAGMA 💜
