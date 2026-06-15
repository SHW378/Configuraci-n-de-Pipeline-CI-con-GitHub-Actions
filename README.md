# Configuracion de Pipeline CI con GitHub Actions

![CI Status](https://github.com/shw-2/Configuraci-n-de-Pipeline-CI-con-GitHub-Actions/actions/workflows/ci.yml/badge.svg?branch=develop)

Proyecto Node.js minimo para demostrar la implementacion de integracion continua con GitHub Actions.

## Comandos



```bash
npm ci
npm run lint
npm test
npm run build
```

## Cómo Ejecutar la Interfaz Localmente

La interfaz del MVP es estática (HTML, CSS, JS), por lo que es muy fácil probarla localmente:

### Opción 1: Servidor Node.js (Recomendado)
Levanta un servidor temporal con Node ejecutando este comando en la raíz del proyecto:
```bash
npx serve src/public
```
*(Si quieres ver la carpeta procesada después de hacer el build, usa `npx serve dist`)*

### Opción 2: Explorador de archivos
Ve a la carpeta `src/public` o `dist` y haz doble clic directo sobre el archivo `index.html`. ¡Tu navegador lo abrirá y funcionará sin problema!

### Opción 3: Live Server (VS Code)
Si usas Visual Studio Code, abre `src/public/index.html`, haz clic derecho en el código y selecciona **"Open with Live Server"**.

## Pipeline CI

El workflow se ejecuta automaticamente cuando se hace `push` a `main` o `develop`, y cuando se abre un pull request hacia `main`.

El pipeline realiza estas acciones:

1. Descarga el codigo del repositorio.
2. Configura Node.js en varias versiones.
3. Instala dependencias con `npm ci`.
4. Ejecuta una revision basica con `npm run lint`.
5. Ejecuta pruebas con `npm test`.
6. Genera un build en la carpeta `dist/`.
