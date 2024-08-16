// cypress/integration/navigation.spec.js

describe('Teste de Navegação', () => {
    it('Deve navegar para a Página 1', () => {
      cy.visit('/');
      cy.contains('Página 1').click();
      cy.url().should('include', '/');
    });
  
    it('Deve navegar para a Página 2', () => {
      cy.visit('/');
      cy.contains('Página 2').click();
      cy.url().should('include', '/page2');
    });
  
    it('Deve navegar para a Página 3', () => {
      cy.visit('/');
      cy.contains('Página 3').click();
      cy.url().should('include', '/page3');
    });
  
    it('Deve navegar para a página do Carrinho', () => {
      cy.visit('/');
      cy.contains('Carrinho').click();
      cy.url().should('include', '/cart');
    });
  });
  