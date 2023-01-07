let input = document.querySelector('.entred-text');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup',() =>{
    if (input.value.trim() != 0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})

// add new item :
addBtn.addEventListener('click',()=>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');//creer un div
        newItem.classList.add('item');//pour ajouter la balise du style 
        newItem.innerHTML=`
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>`
        tasks.appendChild(newItem);
        input.value='';
    }
    else{
        alert("Enter a task please")
    }
}) 

//delete item from list :
tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
//mark item as comleted :
tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-pencil')){
        e.target.parentElement.parentElement.classList.add('completed');
    }
})
