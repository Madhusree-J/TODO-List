const addButton = document.getElementById('button');
const taskInput = document.getElementById('input');
const taskList = document.getElementById('listItems');

const storedTasks = localStorage.getItem('tasks');
if(storedTasks){
    const tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.classList.add('delete-button');
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
    });
}

function addTask(){
    const task = taskInput.value.trim();

    if (task){
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.classList.add('delete-button');
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        


        taskInput.value = '';

        const storedTasks = localStorage.getItem('tasks');
        let tasks = storedTasks ? JSON.parse(storedTasks):[];
        tasks.push({name:task});
        localStorage.setItem('tasks',JSON.stringify(tasks));
    } else{
        alert('Please enter a task');
    }


}

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete-button'))
    {
        const task = e.target.parentNode;
        taskList.removeChild(task);

       const storedTasks = localStorage.getItem('tasks');
       let tasks = storedTasks ? JSON.parse(storedTasks):[];

       tasks = tasks.filter((task) => task.name!==taskName);
       localStorage.setItem('tasks',JSON,stringify(tasks));
    }
});


