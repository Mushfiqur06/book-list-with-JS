import Contact from './data/Contact';
import Contacts from './data/Contacts';
import ContactsComponent from './views/contact/ContactComponent'

let data = [
    {
        name: 'Mushfiqur Rahman',
        phone: '486755894u4',
    },
    {
        name: 'Md Jamal Udding',
        phone: '486755895876',
    },
    {
        name: 'Md Tareq Mahmud',
        phone: '486578568574',
    }
]

let ul = ContactsComponent({
    contactList: data
})

console.log(ul)

let container = document.querySelector('.container');
container.appendChild(ul)
