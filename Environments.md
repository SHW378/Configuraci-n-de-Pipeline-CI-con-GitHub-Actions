# Definición de Entornos (DEV / QA / PROD)

## Flujo de Entornos
El flujo de nuestro código sigue este camino:
`rama develop` (Entorno DEV) ➔ `rama main` vía Pull Request (Entorno QA) ➔ Despliegue (Entorno PROD).

---

## 1. Entorno de Desarrollo (DEV)
* **Rama asociada:** `develop`
* **¿Quién puede hacer deploy?** Cualquier desarrollador del equipo (mediante commit/push directo a la rama).
* **¿Qué pruebas deben pasar?** Se ejecutan las pruebas unitarias básicas (`npm test`) y el análisis de código (`npm run lint`).
* **¿Qué ocurre si falla?** El pipeline de GitHub Actions se detiene (status en rojo). El desarrollador debe corregir el código en su máquina local y volver a hacer push. No avanza a QA.

## 2. Entorno de Pruebas (QA)
* **Rama asociada:** `main` (solo mediante Pull Request)
* **¿Quién puede hacer deploy?** Solo mediante un Pull Request desde `develop` hacia `main`. Requiere revisión.
* **¿Qué pruebas deben pasar?** Deben pasar todas las pruebas unitarias y de integración de la aplicación con éxito antes de permitir el merge.
* **¿Qué ocurre si falla?** GitHub bloquea el botón de "Merge Pull Request". El código defectuoso no puede fusionarse con la rama principal.

## 3. Entorno de Producción (PROD)
* **Rama asociada:** `main` (después del merge)
* **¿Quién puede hacer deploy?** El despliegue a la nube se automatiza una vez que el código se integra a `main`.
* **¿Qué pruebas deben pasar?** Al estar en producción, el código ya superó las pruebas en QA. Se monitorea que la aplicación levante correctamente y responda a las peticiones del usuario final.
* **¿Qué ocurre si falla?** Si el despliegue automático falla, se notifica al equipo para realizar un *rollback* (revertir) a la versión anterior que era estable.
