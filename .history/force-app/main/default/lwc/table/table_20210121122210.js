import { LightningElement, wire } from 'lwc';
import getAllContacts from "@salesforce/apex/getContacts.getAllContacts";

export default class Table extends LightningElement {
    contactsToDisplay = [{ firstName: 'Sasha', lastName: 'Mudriy', email: 'a@b.com', account: 'kavo', mobilePhone: '+12345667', createdDate: new Date, contact: 'da' }]
    @wire(getAllContacts) contactsHandler(data, error) {
        if (error) {
            throw Exception('Cant get Contacts');
        }

    }
}