export class BankManagerOperationsPage {
    goToCustomers(): BankManagerOperationsPage {
        cy.get('button[ng-class=btnClass3]').click();
        return this;
    }

    searchCustomer(key: string): BankManagerOperationsPage {
        cy.get('input[ng-model=searchCustomer]').clear().type(key);
        return this;
    }

    verifyUniqueRecord(firstName: string, lastName: string, postCode: string): BankManagerOperationsPage {
        cy.get('tr[class=ng-scope]').should('have.length', 1);
        cy.get('tr[class=ng-scope] td').eq(0).should('have.text', firstName);
        cy.get('tr[class=ng-scope] td').eq(1).should('have.text', lastName);
        cy.get('tr[class=ng-scope] td').eq(2).should('have.text', postCode);
        return this;
    }
}