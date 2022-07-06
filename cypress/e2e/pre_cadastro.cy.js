/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Pré-cadastro', () => {
    const name = faker.name.firstName().toLowerCase()
    const lastName = faker.name.lastName().toLowerCase()
    const username = `${name}.${lastName}`
    const email = username + '@fakemail.com';
    const password = "Ebac@202256"

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Cadastrar nova conta', () => {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(name)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should("contain", username)

    })
})