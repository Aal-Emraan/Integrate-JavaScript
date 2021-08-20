const anthem = "amar sonar bangla ami tomay valobashi";
const search = 'Ami';
if(anthem.indexOf(search.toLowerCase()) != -1){
    console.log('Ami exist.')
}

const products = [
    'lenovo ideapad Laptop',
    'hp elitebook laptop',
    'iPhone 12 pro max Phone',
    'apple watch',
    'macbook air laptop',
    'google pixel 6 phone',
    'dell inspiron laPtoP'
]

const searching = 'laptop';
const searchingPhone = 'PHone';
const dell = 'dell';
const phone = 'phone';
const laptopList = [];
const phoneList = [];
const dellList = [];
const endsWith = [];
for(item of products){
    if(item.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        laptopList.push(item);
    }
    if(item.toLowerCase().includes(searchingPhone.toLowerCase())){
        phoneList.push(item);
    }
    if(item.toLowerCase().startsWith(dell.toLowerCase())){
        dellList.push(item);
    }
    if(item.toLowerCase().endsWith(phone.toLowerCase())){
        endsWith.push(item);
    }
}

console.log(laptopList);
console.log(phoneList);
console.log(dellList);
console.log(endsWith);