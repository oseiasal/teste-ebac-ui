/// <reference types="cypress" />

describe('Funcionalidade de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"').contains('[19962109] Produto Lgc2').click()
    });

    it.only('deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"').contains('[19962109] Produto Lgc2').click()

        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', '“[19962109] Produto Lgc2” foi adicionado no seu carrinho.')
    });
});