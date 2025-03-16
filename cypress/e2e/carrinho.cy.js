describe('Carrinho', () => {
  it('Adicionar produto ao carrinho com sucesso', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //
    //Testa se o ícone do carrinho conta ao adicionar 1 ítem ao carrinho
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })
})