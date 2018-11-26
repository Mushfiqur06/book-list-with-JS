import uuid from 'uuid/v1'
import { getContact } from './Contacts'
class Contact {
    constructor({name = null, phone = null, email = null, fbLink = null, group = 'other'}){
        this.id = uuid();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.fbLink = fbLink;
        this.group = group;
    }


}

export default Contact;