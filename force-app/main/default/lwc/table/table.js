import { LightningElement, wire } from 'lwc';
import getAllContacts from "@salesforce/apex/getContacts.getAllContacts";

export default class Table extends LightningElement {
    allContacts
    contactsToDisplay
    filterInputValue

    @wire(getAllContacts) contactsHandler({ data, error }) {
        if (error) {
            throw Exception('Cant get Contacts');
        }
        this.allContacts = data
        this.contactsToDisplay = data
    }

    

    filterContactsByNamePrefix(prefix) {
        let newContactsToDisplay = []
        prefix = prefix.toLowerCase()
        this.allContacts.forEach((item) => {
            if(!item.hasOwnProperty('FirstName')){
                if(prefix.length === 0){
                    newContactsToDisplay.push(item)
                }
                return
            }
            if (item.FirstName.toLowerCase().search(prefix) === -1) {
                return
            } else {
                newContactsToDisplay.push(item)
            }
        })
        this.contactsToDisplay = newContactsToDisplay
    }

    handleInputChange(event) {
        this.filterInputValue = event.target.value
    }

    handleFilterButton() {
        this.filterContactsByNamePrefix(this.filterInputValue)
    }
}