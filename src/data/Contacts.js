const contactList = [];

export function createNewContact(contact){
    contactList.push(contact);
}

export function getContactList(){
    return contactList;
}

function getContactIndex(id){
    //Find Contact index number for Delete and Update
    let contactIndex = contactList.findIndex((contact) => {
        return id === contact.id;
    });

    return contactIndex;
}

export function getSingleContact(){
    let index = getContactIndex(id);

    return contactList[index];
}

export function deleteContact(contact){

    let index = getContactIndex(contact.id)

    //Then Delete from ContactList Array.
    contactList.splice(contactIndex, 1);
}

export function updateConctact(oldContact, changeContact){
    let index = getContactIndex(oldContact.id);

    for(let i in changeContact){
        contactList[index][i] = changeContact[i];
    };

    // this.contactList[index] = {
    //     ...this.contactList[index],
    //     ...changeContact
    // }
}