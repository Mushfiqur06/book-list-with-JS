import {getContactList} from './../../data/Contacts';

export function renderContactList(props){
    let contactUI = null;

    if(getContactList().length > 0){
        contactUI = document.createElement('ul');
        contactUI.classList = 'list-group';

        getContactList().forEach(contact => {
            let contactLi = document.createElement('li');
            contactLi.classList = 'list-group-item';
            contactLi.innerText = `${contact.name} --> ${contact.phone}`

            contactUI.appendChild(contactLi);
        })
    }else{
        contactUI = document.createElement('p');
        contactUI.classList = 'lead';
        contactUI.innerText = 'There is no Contact';
    }

    return contactUI;
}

export function renderFavouriteList(props){

}