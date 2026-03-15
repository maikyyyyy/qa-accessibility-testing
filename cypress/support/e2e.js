import './commands'
import 'cypress-axe'

Cypress.on('uncaught:exception', (err) => {
  return false
})