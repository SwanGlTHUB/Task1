public with sharing class getContacts {
    
    public static List<Contact> getAllContacts() {
        
        List<Contact> allContacts;
        allContacts = [SELECT FirstName, LastName, Email, MobilePhone, CreatedDate, AccountId FROM Contact];
        return allContacts;    
    }
}
