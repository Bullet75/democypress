import {LoginPage} from "../pages/login_page"

let loginPage = new LoginPage()

it('login test', () =>{

    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUsername('test');
    loginPage.enterPassword('test');
    loginPage.clickLogin();
  /* OVO GORE JE ISPRAVNIJA VARIJANTA,OVA ISPOD NIJE JER NE BI MOGLI MIJENJATI U SLUCAJU NEKE ZAMJENE NA STRANICI */
   
    /* cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click() */
})