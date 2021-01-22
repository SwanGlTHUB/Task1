public with sharing class getContacts {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts() {
        List<Contact> allContacts;
        allContacts = [
            SELECT FirstName, LastName, Email, MobilePhone, CreatedDate, AccountId, Account.Name
            FROM Contact
            ORDER BY FirstName
        ];
        return allContacts;    
    }
}