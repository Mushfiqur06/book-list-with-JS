import uuid from 'uuid/v1'
class Contact {
    constructor({name = null, phone = null, email = null, fbLink = null, group = 'other', favourite = false}){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.fbLink = fbLink;
        this.group = group;
        this.favourite = favourite
        this.id = uuid();
    }

    print(){
        console.log(this)
    }

}

export default Contact;