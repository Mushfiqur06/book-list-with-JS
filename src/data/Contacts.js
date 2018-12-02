class Contacts {
    constructor(){
        this.contactList = []
    }

    //Create New Contact
    createNewContact(contact){
        this.contactList.push(contact);
    }

    //Get All Conctact
    getContacts(){
        return this.contactList;
    }

    //Find contact index number
    getContactIndex(id){
        //Find Contact index number for Delete and Update
        let contactIndex = this.contactList.findIndex((contact) => {
            return id === contact.id;
        });
    
        return contactIndex;
    }

    //Get Single Contact
    getSingleContact(){
        let index = this.getContactIndex(id);
    
        return this.contactList[index];
    }


    //Delete Contact
    deleteContact(contact){

        let index = this.getContactIndex(contact.id)
    
        //Then Delete from ContactList Array.
        this.contactList.splice(contactIndex, 1);
    }

    //Update Contact
    updateConctact(oldContact, changeContact){
        let index = this.getContactIndex(oldContact.id);
    
        for(let i in changeContact){
            this.contactList[index][i] = changeContact[i];
        }

        this.contactList[index] = {
            ...this.contactList[index],
            changeContact
        }
    }
}

export default Contacts;