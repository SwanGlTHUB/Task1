import { LightningElement } from 'lwc';


export default class Table extends LightningElement {
    firstUser = { 'firstName': Sasha, 'secondName': Mudriy, 'email': 'a@b.com', 'account': 'kavo', 'mobilePhone': '+12345667', 'createdDate': new Date, 'contact': 'da' }
    contacts = [this.firstUser]
}