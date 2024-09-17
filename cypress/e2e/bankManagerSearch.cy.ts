import { LandingPage } from "../lib/pages/landingPage";

describe('Bank Manager search', () => {

    [
        { firstName: 'Harry', lastName: 'Potter', openBalance: '0', finalBalance: '500', postCode: 'E725JB', accountNumber: '100410051006'},
        { firstName: 'Hermoine', lastName: 'Granger', openBalance: '5096', finalBalance: '5596', postCode: 'E859AB', accountNumber: '100110021003'},
        { firstName: 'Ron', lastName: 'Weasly', openBalance: '0', finalBalance: '500', postCode: 'E55555', accountNumber: '100710081009'},
        { firstName: 'Albus', lastName: 'Dumbledore', openBalance: '0', finalBalance: '500', postCode: 'E55656', accountNumber: '101010111012'},
        { firstName: 'Neville', lastName: 'Longbottom', openBalance: '0', finalBalance: '500', postCode: 'E89898', accountNumber: '101310141015'}
    ].forEach((data) => {
        [
            {user: `${data.firstName} ${data.lastName}`, by: 'First Name', key: data.firstName},
            {user: `${data.firstName} ${data.lastName}`, by: 'Last Name', key: data.lastName},
            {user: `${data.firstName} ${data.lastName}`, by: 'Post Code', key: data.postCode},
            {user: `${data.firstName} ${data.lastName}`, by: 'Account number 1st part', key: data.accountNumber.substring(0, 4)},
            {user: `${data.firstName} ${data.lastName}`, by: 'Account number 2nd part', key: data.accountNumber.substring(4, 8)},
            {user: `${data.firstName} ${data.lastName}`, by: 'Account number 3rd part', key: data.accountNumber.substring(8, 12)}
        ].forEach((searchCriteria) => {
            it(`should be viewed by manager for user: ${searchCriteria.user} by ${searchCriteria.by}`, () => {
                new LandingPage()
                .open()
                .bankManagerLogin()
                .goToCustomers()
                .searchCustomer(searchCriteria.key)
                .verifyUniqueRecord(
                    data.firstName,
                    data.lastName,
                    data.postCode
                );
            });
        });
    });
});