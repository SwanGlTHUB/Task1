public with sharing class getAllContacts {
    
    public getAllContacts() {
        
        List<Contact> allContacts;
        allContacts = [SELECT FirstName, LastName, Email, MobilePhone, CreatedDate, AccountId FROM Contacts];
        return allContacts;    
    }
}
