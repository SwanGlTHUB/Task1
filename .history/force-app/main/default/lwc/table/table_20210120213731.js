import { LightningElement } from 'lwc';

firstUser = { 'firstName': Sasha, 'secondName': Mudriy, 'email': 'a@b.com', 'account': 'kavo', 'mobilePhone': '+12345667', 'createdDate': new Date, 'contact': 'da' }


export default class Table extends LightningElement {
    allContacts = [firstUser]
    contactsToDisplay = [firstUser]
}