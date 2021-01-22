import { LightningElement, wire } from 'lwc';
import getAllContacs from "@salesforce/apex/getContacts.getAllContacts";

export default class Table extends LightningElement {
    contactsToDisplay = [{ firstName: 'Sasha', lastName: 'Mudriy', email: 'a@b.com', account: 'kavo', mobilePhone: '+12345667', createdDate: new Date, contact: 'da' }]

}