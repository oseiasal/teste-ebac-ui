/// <reference types="cypress" />

describe('Testar as funcionalidades de login', () => {

  const EMAIL = "oseiasal@gmail.com"

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Ao logar, verificar se chegou na página minha conta', () => {
    cy.get('#username').type(EMAIL)
    cy.get('#password').type("Vre52YwCLqkqMmK")

    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', "Minha conta")

  })

  it('Ao digitar a senha errada mostrar mensagem de erro', () => {
    cy.get('#username').type(EMAIL)
    cy.get('#password').type("12345678")

    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', `Erro: A senha fornecida para o e-mail ${EMAIL} está incorreta. Perdeu a senha?`)

  })
})