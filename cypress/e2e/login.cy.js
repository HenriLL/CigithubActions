describe('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click();
    cy.location('pathname').should('eq', '/inventory.html')
  })
  it('Falha Login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauc')
    cy.get('[data-test="login-button"]').click();
    cy.get('.error-message-container').contains('Epic sadface: Username and password do not match any user in this service')
  })
})