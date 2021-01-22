@isTest public with sharing class testGetAllContacts {
    
    @isTest private static void testGetAllContacts(){
        //Create and insert Accounts
        Account firstAccount = new Account(Name = 'Misha');
        Account secondAccount = new Account(Name = 'Pasha');
        List<Account> accounts = new List<Account>();
        accounts.add(firstAccount);
        accounts.add(secondAccount);
        insert accounts;

        //Create and insert Contacts
        Contact firstContact = new Contact(AccountId = firstAccount.id, Account = firstAccount, LastName = 'Lebed');
        Contact secondContact = new Contact(AccountId = secondAccount.id, Account = secondAccount, LastName = 'Sankin');
        List<Contact> contacts = new List<Contact>();
        contacts.add(firstContact);
        contacts.add(secondContact);
        insert contacts;

        List<Contact> correctList = [
            SELECT FirstName, LastName, Email, MobilePhone, CreatedDate, AccountId, Account.Name
            FROM Contact
            ORDER BY FirstName
        ];
        List<Contact> returnedList = getContacts.getAllContacts();

        System.assertEquals(correctList, returnedList);
    }
}
