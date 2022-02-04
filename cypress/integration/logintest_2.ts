import {LoginPage} from "../pages/demo_lp_1"

const loginPage = new LoginPage()

it('login test', function(){

    loginPage.navigate('https://practicetestautomation.com/practice-test-login/')
    loginPage.enterUsername('student')
    loginPage.enterPassword('Password123')
    loginPage.clickLogin()

    /* cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click() */


})