let btn = document.querySelector('#create-note');
let notesDiv = document.querySelector('.notesDiv');
let innerDiv = document.querySelector('.note .text');
let colors = document.querySelector('.colors');
let del = document.querySelector('.note .delete');
let add = document.querySelector('.note .add');
btn.addEventListener('click', function() {
    let title = document.getElementById('title');
    let body = document.getElementById('body');
    createNote(title.value,body.value,colors.value);
    });

function createNote(title,body,color) {
    let div = document.createElement('div');
    let innerdiv = document.createElement('div');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let bold = document.createElement('b');
    let para = document.createElement('p');
    div.classList.add('note');
    innerdiv.style.backgroundColor = color;
    innerdiv.classList.add('text');
    bold.innerHTML = title;
    para.innerHTML = body;
    btn1.classList.add('add');
    btn2.classList.add('delete');
    btn1.innerHTML = 'Edit Note';
    btn2.innerHTML = 'Delete Note';
    notesDiv.append(div);
    div.append(innerdiv);
    div.append(btn1);
    div.append(btn2);
    innerdiv.append(bold);
    innerdiv.append(para);

    
}
// add.addEventListener('click', function () {
//     let newTitle = prompt('Enter new title:', title);
//     let newBody = prompt('Enter new body:', body);
//     bold.innerHTML = newTitle;
//     para.innerHTML = newBody;
// });

notesDiv.addEventListener('click',(val)=>{
    if(val.target.classList.value === 'delete'){
       val.target.parentElement.remove();
    }
    if(val.target.classList.value === 'add'){
        let newtext = prompt('Enter note title'); 
        let newbody = prompt('Enter note body'); 
            innerDiv.children[0].innerHTML = newtext;
            innerDiv.children[1].innerHTML = newbody;
    }
});
