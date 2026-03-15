describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Reporta violaciones de accesibilidad en la página principal', () => {
    cy.checkA11y(null, null, (violations) => {
      violations.forEach((violation) => {
        cy.log(`❌ ${violation.id}: ${violation.description}`)
        cy.log(`Impacto: ${violation.impact}`)
      })
    }, true)
  })

  it('No debe haber violaciones críticas', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical']
    }, (violations) => {
      violations.forEach((violation) => {
        cy.log(`❌ CRÍTICO: ${violation.id}`)
      })
    }, true)
  })

  it('Reporta violaciones en el formulario de login', () => {
    cy.visit('/login')
    cy.injectAxe()
    cy.checkA11y(null, null, (violations) => {
      violations.forEach((violation) => {
        cy.log(`❌ ${violation.id}: ${violation.description}`)
      })
    }, true)
  })
})