# Test Exercise

## Introduction 

This is a part of test exercise which should implement the following on test portal applicagtion (https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) scenarios:
1. Login as a customer, perform deposit operation and make sure it is properly reflected in the transaction history
2. Login and a bank manager and make sure customers can be found by: first name, last name, post code, account numbers

The above scenarios are implemented in the following files:
1. **cypress\e2e\depositMoney.cy.ts** - customer deposit scenarios
2. **cypress\e2e\bankManagerSearch.cy.ts** - search scenarios

## Setup and run instructions

Make sure you have Node and NPM installed. The following versions were used for this particular exercise:

```
Node: v20.14.0
NPM: 10.7.0
```

Once relevant infrastructure is installed, it needs to run the following command from the project root:

```
npm install
```

This will download all necessary package dependencies.

**NOTE:** for Cypress run it may be required to install Cypress as globally accessible application, if it is not set already. For this purpose, it needs to run the following command:

```
npm install -g cypress
```
This will install the Cypress as globally accessible application.

Once it's done, tests can be run. Normally it's done using the following command line:

```
npm run test
```

Alternatively, it can be run using command line:

```
cypress run
```
