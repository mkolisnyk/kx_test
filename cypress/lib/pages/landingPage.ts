import { BankManagerOperationsPage } from "./bankManagerOperationsPage";
import { OperationsPage } from "./operationsPage";

export class LandingPage {
    open(): LandingPage {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        return this;
    };

    customerLogin(name: string): OperationsPage {
        cy.contains('Customer Login').click();
        cy.get('#userSelect').select(name);
        cy.get('button[type="submit"]').click();
        return new OperationsPage();
    };

    bankManagerLogin(): BankManagerOperationsPage {
        cy.contains('Bank Manager Login').click();
        return new BankManagerOperationsPage();
    }
};