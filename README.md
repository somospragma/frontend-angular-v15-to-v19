<h1 align="center">Arquetipo Angular Pragma</h1>
<h2 align="center">Angular | La plataforma moderna para el desarrollo web.</h2>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-v19-red?logo=angular" />
   <img src="https://img.shields.io/badge/%E2%9A%A0%EF%B8%8F-Experimental-orange" />
  <img src="https://img.shields.io/badge/%F0%9F%9A%80-Alpha-blue" />
  <img src="https://img.shields.io/badge/Standalone-Components-blue" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>


<p align="center">
  <img src="https://gitlab.com/pragma-arquetipos-front/arquetipo-angular-pragma/-/wikis/uploads/522563bccab2344634d3800d73514055/angular_wordmark_gradient.png" alt="angular-logo" width="300px" height="101x"/>

  <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="jest-logo" width="100px" height="95px"/>

  <img src="https://plugins.jetbrains.com/files/22761/696175/icon/default.png" alt="biome-logo" width="100px" height="90px"/>

 <img src="https://miro.medium.com/v2/resize:fit:1000/1*qyX0fotHRZW_-jzPkAnP4g.png" alt="signal-store-logo" width="100px" height="100px"/>



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

Este proyecto ha sido genereado con [Angular CLI](https://github.com/angular/angular-cli) versión 19

Este proyecto trabaja bajo Angular v19 mediante STANDALONE,puede revisar las TAGs o Ramas del respositorio actual para ver las versiones disponibles.


#### Requerimientos y dependencias

|  package use  |  version  |
|---------------|-----------|
|  Angular CLI  |  19.2     |
|  Node         |  22.4     |
|  Npm          |  10.9     |



 ---
### ⚡ Proyecto en Fase Experimental

<p>
  <img src="https://img.shields.io/badge/%E2%9A%A0%EF%B8%8F-Experimental-orange" />
  <img src="https://img.shields.io/badge/%F0%9F%9A%80-Alpha-blue" />
</p>

Este proyecto utiliza **Angular 19** y está en **fase Alpha**.  
El objetivo es probar configuraciones y herramientas experimentales como:

- 🔹 **Biome** (Linting y formateo rápido)
- 🔹 **Signals** (Reactividad en Angular)
- 🔹 **Signal Store** (Gestión de estado)

⚠️ **Nota:** Algunas configuraciones pueden cambiar o no ser estables en futuras versiones.

---


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

## Biome

![⚠️ Experimental](https://img.shields.io/badge/%E2%9A%A0%EF%B8%8F-Experimental-orange)

### 🚀 Biome en Angular
Biome es una herramienta rápida y eficiente para linting y formateo de código en TypeScript.  
Sin embargo, **aún no tiene soporte para SCSS ni HTML**, por lo que es recomendable complementarlo con ESLint y Prettier.


Ejeucte los comandos según corresponda usando biome:

```bash 
npm run lint
``` 

```bash
npm run lint-all 
``` 


Para obtener el mejor rendimiento, debes haber instalado y configurado las extensiones necesarias y/o recomendadas:

- **Biome** -> biomejs.biome

## Branch, Commits y GIT

Para la creación de Branch revise la estrategia de Branching Adecuada para el proyecto. 
Para la generación de commits haga uso de Conventional Commits puede consultar mas [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Este proyecto usa Husky

Husky es una herramienta que ayuda a gestionar Git hooks en proyectos, permitiendo ejecutar scripts automáticamente antes de commits, pushes u otras acciones de Git. Se usa comúnmente para asegurarse de que el código sigue ciertas reglas antes de ser enviado al repositorio.

Husky suele configurarse para tareas como:

Ejecutar linters o formatters antes de hacer commit (ej. biome).
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
