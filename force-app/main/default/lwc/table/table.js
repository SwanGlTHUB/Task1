import { LightningElement, wire } from 'lwc';
import getAllContacts from "@salesforce/apex/getContacts.getAllContacts";
import { getRecord } from 'lightning/uiRecordApi';

export default class Table extends LightningElement {
    allContacts
    contactsToDisplay
    filterInputValue

    @wire(getRecord, {fields: ['Contact.LastName']})someProp(){
        console.log('rabotaet')
    }


    @wire(getAllContacts) contactsHandler(response) {
        if (response.error) {
            throw Exception('Cant get Contacts');
        }
        this.allContacts = response.data
        this.contactsToDisplay = response.data
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