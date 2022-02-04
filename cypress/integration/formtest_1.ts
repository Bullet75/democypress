/// <reference types= "cypress" />

it('Form test', () =>{
    cy.visit('https://test.qatechhub.com/form-elements/')
    
    /* First Name */
    cy.get('#wpforms-49-field_1').type("Ivan")
    /* Last Name */
    cy.get('#wpforms-49-field_1-last').type("Ivano")
    /* Email */
    /* cy.get('#wpforms-49-field_2') */
    cy.get("input[type='email']").type("skefo@gmail.com")
    /* Phone Number */
    cy.get('#wpforms-49-field_4').type('244-423-4566{enter}', {delay:75})
    /* Gender */
    /* Male */
    cy.get('#wpforms-49-field_3_1').click()
    /* Female */
    cy.get('#wpforms-49-field_3_1')
    /* Select Course */
    cy.get('#wpforms-49-field_5').select('TestComplete')
                                 .should('have.value', 'TestComplete')
    /* Submit & Assertions for SUBMIT Button */
    cy.get('#wpforms-submit-49').should('contain', 'Submit')
                                .should('have.class','wpforms-submit')
                                .should('have.text', 'Submit')
                                .should('be.visible')
                                .should('be.enabled')
    
    cy.get('#wpforms-submit-49').invoke('attr', 'id')
                                .should('equal', 'wpforms-submit-49')
    
    /* cy.get('#wpforms-submit-49').click() */
    cy.contains('Submit').click()                         
                                                          

    




})