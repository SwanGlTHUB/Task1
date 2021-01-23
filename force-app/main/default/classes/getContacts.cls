public with sharing class getContacts {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts() {
        List<Contact> allContacts;
        allContacts = [
            SELECT Account.Name, Email, MobilePhone, AccountId, FirstName, LastName, CreatedDate
            FROM Contact
            ORDER BY FirstName
            LIMIT 100
        ];
        return allContacts;    
    }
}