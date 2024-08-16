// cypress/integration/productCard.spec.js

describe('Teste de Renderização do Card do Produto', () => {
    it('Deve exibir os valores corretos no card do produto', () => {
      cy.visit('/page3');
      
      cy.get('.product-card')
        .should('exist')
        .and('contain', 'Produto')
        .and('contain', 'R$ 299,99')
        .and('contain', 'R$ 209,99 à vista');
      
      cy.get('.product-image').should('be.visible');
      cy.contains('Adicionar ao Carrinho').should('be.visible');
    });
  });
  