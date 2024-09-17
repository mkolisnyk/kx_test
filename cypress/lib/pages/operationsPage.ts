export class OperationsPage {
    verifyBalance(expectedValue: string): OperationsPage {
        cy.get('.ng-binding').eq(2).should('have.text', expectedValue);
        return this;
    }

    deposit(value: string): OperationsPage {
        cy.get('button[ng-class=btnClass2]').click();

        cy.get('input[type=number]').type(value);
        cy.get('button[type="submit"]').click();

        cy.contains('Deposit Successful').should('exist');
        return this;
    }

    goToTransactions(): OperationsPage {
        cy.reload();
        cy.get('button[ng-class=btnClass1]').click();
        return this;
    }

    sortBy(by: string): OperationsPage {
        cy.contains(by).click({force: true});
        return this;
    }

    verifyTransactionHistory(dateValue: string, amount: string, typeValue: string): OperationsPage {
        cy.get('#anchor0 td').eq(0).should('contain', dateValue);
        cy.get('#anchor0 td').eq(1).should('have.text', amount);
        cy.get('#anchor0 td').eq(2).should('have.text', typeValue);
        return this;
    }
}