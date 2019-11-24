export default function input(props){
    let inp = null;

    switch(props.type){
        case 'INPUT':
            inp = document.createElement('input');
            inp.type = 'text';
            inp.placeholder = props.attr.placeholder;
            inp.className = props.attr.className 
            return inp;
        case 'SELECT':
            inp = document.createElement('select');
            inp.className = props.attr.className;
            inp.name = props.attr.name;
            //Create option
            props.option.forEach(option => {
                let opt = document.createElement('option');
                opt.value = option.value;
                opt.innerText = option.innerText;

                inp.appendChild(opt);
            })
            return inp;
        case 'CHECKBOX': 
            let label = document.createElement('label');
            label.for = props.attr.id;
            label.innerHTML = props.attr.label;
            
            let input = document.createElement('input');
            input.type = 'checkbox'
            input.value = props.attr.value;
            input.id = props.attr.id;

            inp = document.createElement('div');
            inp.appendChild(input);
            inp.appendChild(label);
            
            return inp
    }

    return inp;

}