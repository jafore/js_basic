const Tasklist= [
    {task_name:"Prayer"},
    {task_name:"Recite Quran"},
    {task_name:"Brakfast"},
    {task_name:"Go to Office"},
]

let liList= '';
Tasklist.forEach(task =>{
    liList+= `<li>${task.task_name}</li>`;
})

let printTasks= document.getElementById('TaskList');
console.log(printTasks);
// printTasks.innerHTML =`<li>Taks1</li>`;
// printTasks.innerHTML +=`<li>Taks2</li>`;
// printTasks.innerHTML +=`<li>Taks3</li>`;

printTasks.innerHTML=liList

// add taks list by input 

let addButton= document.getElementById('btn-add');
addButton.addEventListener('click', (envent)=>{
    envent.preventDefault()
    let newTask= document.getElementById('newTask');
    let taskList= document.getElementById('taskList2');

    console.log(newTask.value);
    taskList.innerHTML +=`<li>${newTask.value} <button class='del-btn'>Del</button></li>`;
    newTask.value='';


    let delbuttons=document.querySelectorAll('.del-btn');

    delbuttons.forEach(delbutton =>{
        delbutton.addEventListener('click', ()=>{
            let liElement= delbutton.parentElement;
            liElement.remove();
        });
    });
    

})
