import Contact from './data/Contact';
import Contacts from './data/Contacts';
import ContactsComponent from './views/contact/ContactComponent'

import Form from './views/contactForm/contactForm';
import {renderContactList} from './views/viewData/viewData'


let mode = 'list'

let newBtn = document.getElementById('newContact');
let output = document.getElementById('output');

window.onload = function(){
    render();
    newBtn.addEventListener('click', function(){
        if(mode === 'list'){
            mode = 'form';
            newBtn.innerHTML = 'Show All Contact';
            render()
        }else if(mode === 'form'){
            mode = 'list';
            newBtn.innerHTML = 'Create New Contact';
            render();
        }
    });
}

function render(){
    if(mode === 'list'){
        output.innerHTML = ''
        output.appendChild(renderContactList());
    }else if(mode === 'form'){
        output.innerHTML = ''
        let form = Form({
            button: {
                innerText: 'submit'
            }
        })
        output.appendChild(form);
        console.log(form)
    }
}