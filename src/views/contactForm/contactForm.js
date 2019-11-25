import Input from './../input/inputs';
import { getContactList, createNewContact } from './../../data/Contacts'
import Contact from '../../data/Contact';

export default function Form(props){
    const form = document.createElement('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let contact = {}
        for(let i = 0; i < event.target.length - 1; i++){
            if(event.target[i].name === 'favourite'){
                contact[event.target[i].name] = event.target[i].checked;
            }else{
                contact[event.target[i].name] = event.target[i].value;
            }
        }
        console.log(contact)
        createNewContact(new Contact(contact));
        form.reset();
        console.log(getContactList())
    })

    let nameField = Input({
        type: 'INPUT',
        attr: {
            placeholder: 'Enter Your Name',
            className: 'form-control',
            required: true,
            name: 'name'
        }
    });

    let emailField = Input({
        type: 'INPUT',
        attr: {
            placeholder: 'Enter Your Email',
            className: 'form-control',
            required: true,
            name: 'email'
        }
    });

    let phoneField = Input({
        type: 'INPUT',
        attr: {
            placeholder: 'Enter Your Phone',
            className: 'form-control',
            required: true,
            name: 'phone'
        }
    });

    let fbField = Input({
        type: 'INPUT',
        attr: {
            placeholder: 'Enter Your Facebook ID',
            className: 'form-control',
            required: false,
            name: 'fb'
        }
    });

    let groupField = Input({
        type: 'SELECT',
        attr: {
            name: 'contactGroup',
            className: 'form-control',
            name: 'group'
        },
        option: [
            {value: 'Other', innerText: 'Other'},
            {value: 'Family', innerText: 'Family'},
            {value: 'Friends', innerText: 'Friends'},
            {value: 'Office', innerText: 'Office'}
            
        ]
    });

    let checkbox = Input({
        type: 'CHECKBOX',
        attr: {
            id: 'fav',
            label: 'Add to Favourite',
            name: 'favourite'
        }
    });

    //Create Submit button
    let submitbtn = document.createElement('button');
    submitbtn.className = 'btn btn-primary';
    submitbtn.innerHTML = props.button.innerText

    form.appendChild(nameField);
    form.appendChild(emailField);
    form.appendChild(phoneField);
    form.appendChild(fbField);
    form.appendChild(groupField);
    form.appendChild(checkbox);
    form.appendChild(submitbtn);
    

    return form;

}