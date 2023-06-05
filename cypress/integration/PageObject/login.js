
//objeto
class LoginPage {
    
    enterEmail() {
        return cy.get('input[formcontrolname="userName"]');
    }

    enterPassword() {
        return cy.get('input[formcontrolname="password"]');
    }

    confirmar() {
        return cy.get('button[type="submit"]').click();
    }

 }
export default LoginPage
