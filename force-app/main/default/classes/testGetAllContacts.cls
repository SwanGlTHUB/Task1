@isTest public with sharing class testGetAllContacts {
    
    @isTest private static void testGetAllContacts(){
        Test.startTest();
        //Create and insert Accounts
        Account firstAccount = new Account(Name = 'abc');
        List<Account> accounts = new List<Account>();
        accounts.add(firstAccount);
        insert accounts;

        //Create and insert Contacts
        Contact firstContact = new Contact(Email = 'a@gmail.com', MobilePhone = '123', AccountId = firstAccount.id, Account = firstAccount, FirstName = 'Misha', LastName = 'Lebed');
        List<Contact> contacts = new List<Contact>();
        contacts.add(firstContact);
        insert contacts;
        List<Contact> returnedList = getContacts.getAllContacts();
        System.assertEquals(contacts, returnedList);
        Test.stopTest();
    }

    @isTest private static void testNoAccountLinked(){
        Test.startTest();
        Contact contact = new Contact(Email = 'a@gmail.com', MobilePhone = '123', FirstName = 'Misha', LastName = 'Lebed');
        List<Contact> contacts = new List<Contact>();
        contacts.add(contact);
        insert contacts;
        List<Contact> returnedList = getContacts.getAllContacts();
        System.assertEquals(contacts, returnedList);
        Test.stopTest();
    }
}
