// cypress/integration/form.spec.js

describe('Teste do Formulário e Modal', () => {
  it('Deve exibir o modal com mensagem de sucesso após enviar o formulário', () => {
    cy.visit('/page2');
    
    // Preenche o formulário
    cy.get('input[name="nome"]').type('João Silva');
    cy.get('input[name="email"]').type('joao.silva@example.com');
    cy.get('input[name="senha"]').type('senha123');
    
    // Envia o formulário
    cy.contains('Enviar').click();
    
    // Verifica a exibição do modal
    cy.get('.modal').should('exist');
    cy.get('.modal-content').should('contain', 'Conteúdo enviado');
    
    // Fecha o modal
    cy.get('.close').click();
    cy.get('.modal').should('not.exist');
  });
});
