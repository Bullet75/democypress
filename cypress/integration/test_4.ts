/// <reference types="Cypress" />

import { should } from "chai"

describe('Launch my app', () => {
    it('testing app', () => {
        cy.visit('https://www.freshworks.com/')
        cy.get('#onetrust-accept-btn-handler').click()
        
        cy.contains('Platform').click() 
        cy.contains('Freshworks Neo').click()
        cy.url().should('include', '/platform')
        cy.contains('Platform')
        cy.get('.mb-0').click()
    })

    it('testing All products', () => {
        cy.visit('https://www.freshworks.com/apps/')
        cy.get('.selected-product').click()                         
        cy.get('.options:nth-child(2)').click() 
        /* cy.contains('freshdesk').click({force:true}) */                        

    })
})