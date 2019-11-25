import ContactItem from './contactItem'
import contactItem from './contactItem';

export default function ContactsComponent(props){
    let ul = document.createElement('ul');
    ul.classList.add('list-group');

    props.contactList.forEach(contact => {
        let item = contactItem({
            name: contact.name,
            phone: contact.phone,
            avatar: contact.name.charAt(0).toUpperCase()
        })

        // ul.appendChild(item)
        console.log(item)
    })

    return ul;
}