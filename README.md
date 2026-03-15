# QA Accessibility Testing

Suite de pruebas de accesibilidad automatizadas con Cypress y axe-core, validando el cumplimiento de las WCAG 2.2.

## 🧪 ¿Qué se testea?

- **Página principal:** detección de violaciones de accesibilidad generales
- **Violaciones críticas:** filtrado específico de impacto crítico
- **Página de login:** validación de accesibilidad en flujos de autenticación

## 🏗️ Estructura del proyecto
```
cypress/
├── e2e/
│   └── accessibility.cy.js
├── support/
│   ├── commands.js
│   └── e2e.js
cypress.config.js
```

## 🚀 Cómo ejecutar los tests

### Modo visual
```bash
npx cypress open
```

### Modo headless
```bash
npx cypress run
```

## 🛠️ Tecnologías

- [Cypress](https://www.cypress.io/)
- [axe-core](https://github.com/dequelabs/axe-core)
- [cypress-axe](https://github.com/component-driven/cypress-axe)
- WCAG 2.2

## ♿ ¿Por qué accesibilidad?

La accesibilidad digital es un requisito legal en Europa bajo la norma EN 301 549. Estos tests detectan automáticamente violaciones como elementos sin texto alternativo, problemas de contraste, falta de landmarks y más.