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

    longestCommonPrefix(stringA, stringB) {
        let minimalLength = Math.min(stringA.length, stringB.length)
        let longestCommonPrefixLen = 0
        for (let i = 0; i < minimalLength; i++) {
            if (stringA[i] === stringB[i]) {
                longestCommonPrefixLen++
            } else {
                break
            }
        }
        return longestCommonPrefixLen
    }

    filterContactsByNamePrefix(prefix) {
        let newContactsToDisplay = []
        this.allContacts.forEach((item) => {
            let longestPrefix = this.longestCommonPrefix(item.FirstName, prefix)
            if (longestPrefix < prefix.length) {
                return
            } else {
                newContactsToDisplay.push({...item, prefixLen: longestPrefix })
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