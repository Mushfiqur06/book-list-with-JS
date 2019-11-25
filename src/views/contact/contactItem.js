import {create} from './../../halper'

export default function contactItem(props){
    
    let li = document.createElement('li');
    // li.className.add();
    li.classList = 'list-group-item d-flex'

    let avatar = document.createElement('div');
    avatar.classList.add('avatar')
    avatar.innerHTML = props.avatar;

    let groupDiv = document.createElement('div');

    let p1 = document.createElement('p');
    p1.innerHTML = props.name;

    let p2 = document.createElement('p');
    p2.innerHTML = props.phone

    groupDiv.append(p1);
    groupDiv.append(p2);

    li.append(avatar);
    li.append(groupDiv);

    li.onclick = function(){
        this.remove()
    }

    return li;
}