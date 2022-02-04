/// <reference types="Cypress" />

describe("Login", () => {
    it("Sign in", () => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=0tfjoz")
        cy.get("input[type='email']").type('user55@gmail.com')
        cy.get("input[type='password']").type('user555')
        cy.get('.btn').contains('Sign in').click()
    })
})