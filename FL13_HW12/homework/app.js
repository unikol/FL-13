const add = document.getElementById('add');
const main = document.getElementById('main');
const modifity = document.getElementById('modifity');
const inputTitle = document.querySelector('.messageTitle');
const inputDes = document.querySelector('.messageDes');
const mainBtn = document.querySelector('.main-btn');
const addBtn = document.querySelector('.add-btn');
const cancelMain = document.querySelectorAll('.cancelBtn');
const editBtn = document.querySelector('.modifityBtn');
const textMain = document.querySelector('.mainText');
const editInput = document.querySelector('.modText');
const textField = document.querySelector('.set');
    
location.hash = '#main';
if(location.hash === '#main'){
    add.style.display='none';
    modifity.style.display='none';
}

window.addEventListener('hashchange', () => {
    if(location.hash === '#main'){
        main.style.display='block';
        add.style.display='none';
        modifity.style.display='none';
    } else if(location.hash === '#add'){
        main.style.display='none';
        add.style.display='block';
        modifity.style.display='none';
    } else{
        modifity.style.display='block';
        main.style.display='none';
        add.style.display='none';
    }
});

mainBtn.addEventListener('click',() => {
    location.hash = '#add';
});

for (let i = 0; i < cancelMain.length; i++) {
    cancelMain[i].addEventListener('click',() => {
            location.hash = '#main';   
    });   
}

let list = [];

if(localStorage.getItem('todo')){
    list =JSON.parse(localStorage.getItem('todo'));
     addMessage();
}

addBtn.addEventListener('click',() => {
    let titleValue = inputTitle.value,
        desValue = inputDes.value,
        temp ={};
        if(titleValue!==''&& desValue!==''){
            temp.text = `Term: ${titleValue}; Definition: ${desValue};`;
            temp.finished = false;
            let i = list.length;
            list[i] = temp;
            addMessage();
            localStorage.setItem('todo',JSON.stringify(list));
            inputTitle.value = '';
            inputDes.value = '';
            location.hash = '#main';
        } else{
            alert('Enter information');
        }
});

function addMessage() {
    let out ='';
    for(let i=0;i<list.length;i++){
            out += `
            <li class="item">
              <label for='item_${i}' class='${list[i].finished ? 'finished':''}'>${list[i].text}</label>
              <button class='edit'>Edit</button>
              <button class='remove'>Remove</button>
            </li>
            `;
            textMain.style.display='none';
        
    }
    textField.innerHTML = out;
    removeMessage();
    editMessage();
}

textField.addEventListener('click',(event) => {
    event.preventDefault();
    for(let i=0;i<list.length;i++){
        if(list[i].text === event.target.innerHTML){
            list[i].finished = !list[i].finished;
            addMessage();
            localStorage.setItem('todo',JSON.stringify(list));
    }
}
});
function removeMessage() {
    const remove = document.querySelectorAll('.remove');
    remove.forEach((elem,i) => {
        elem.addEventListener('click',(e) => {
            list.splice(i,1);
            e.target.parentElement.remove();
            localStorage.setItem('todo',JSON.stringify(list));
        });
    });
}

function editMessage() {
    const edit = document.querySelectorAll('.edit');
    edit.forEach((elem,i) => {
        elem.addEventListener('click',(e) => {
            location.hash = '#modifi';
            editInput.value = list[i].text;

            editBtn.addEventListener('click',() => {
                e.target.parentElement.childNodes.forEach((elem) => {
                    if(elem.nodeName === 'LABEL'){
                        list[i].text = editInput.value;
                        elem.textContent = editInput.value;
                    }
                });
                location.hash = '#main';
                localStorage.setItem('todo',JSON.stringify(list));
            });
        });
    });
}