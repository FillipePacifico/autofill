/// <reference types="cypress" />

import LoginPage from "../PageObject/login"

describe('Login', function () {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

     //metodo

     it('fazer login', function () {
         const login = new LoginPage();
         const nome = Cypress.env('userName')
         const senha = Cypress.env('password')

         login.enterEmail().type(nome, {log:false});
         login.enterPassword().type(senha, {log:false});
         login.confirmar().click();
         
     })
     

})