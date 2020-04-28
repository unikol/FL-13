// Your code goes here
let login = prompt('Login Name:', '');
let currentHours;
let password;
const four = 4;
const twenty = 20;
// check email
if(login === null || login === '') {
    alert('Canceled');
} else if (login.length < four){
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (login.includes('Admin') || login.includes('User')){
    password = prompt('Enter the password:');
} else {
    alert('I don\'t know you');
}
const newLocal = 'User';
// check password
if(password === null || password === '') {
    alert('Canceled');
} else if(login === newLocal && password === `UserPass`
|| login === 'Admin' && password === `AdminPass`){
    let currentHours = new Date().getHours();
    console.log(currentHours);
    if(currentHours < twenty){
        alert('Good day!')
    } else{
        alert('Good evening!');
    }
}

