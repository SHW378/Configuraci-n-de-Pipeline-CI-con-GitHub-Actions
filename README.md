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

## Pipeline CI

El workflow se ejecuta automaticamente cuando se hace `push` a `main` o `develop`, y cuando se abre un pull request hacia `main`.

El pipeline realiza estas acciones:

1. Descarga el codigo del repositorio.
2. Configura Node.js en varias versiones.
3. Instala dependencias con `npm ci`.
4. Ejecuta una revision basica con `npm run lint`.
5. Ejecuta pruebas con `npm test`.
6. Genera un build en la carpeta `dist/`.
