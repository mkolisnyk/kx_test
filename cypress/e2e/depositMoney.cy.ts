import * as moment from 'moment';
import { LandingPage } from "../lib/pages/landingPage";

describe("Deposit money", () => {
    [
        { firstName: 'Harry', lastName: 'Potter', openBalance: '0', finalBalance: '500', postCode: 'E725JB', accountNumber: '100410051006'},
        { firstName: 'Hermoine', lastName: 'Granger', openBalance: '5096', finalBalance: '5596', postCode: 'E859AB', accountNumber: '100110021003'},
        { firstName: 'Ron', lastName: 'Weasly', openBalance: '0', finalBalance: '500', postCode: 'E55555', accountNumber: '100710081009'},
        { firstName: 'Albus', lastName: 'Dumbledore', openBalance: '0', finalBalance: '500', postCode: 'E55656', accountNumber: '101010111012'},
        { firstName: 'Neville', lastName: 'Longbottom', openBalance: '0', finalBalance: '500', postCode: 'E89898', accountNumber: '101310141015'}
    ].forEach((data) => {
        it(`should be done by user: ${data.firstName} ${data.lastName}`, () => {
            // Landing page
            new LandingPage()
                .open()
                .customerLogin(`${data.firstName} ${data.lastName}`)
                .verifyBalance(`${data.openBalance}`)
                .deposit('500')
                .verifyBalance(`${data.finalBalance}`)
                .goToTransactions()
                .sortBy('Date-Time')
                .verifyTransactionHistory((moment(new Date())).format('MMM DD, YYYY'), '500', 'Credit');

                // Sep 17, 2024 4:41:04 PM
        });

 
    });
});
