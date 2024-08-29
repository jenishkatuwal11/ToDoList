document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

document.getElementById('newTask').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const taskText = e.target.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            e.target.value = '';
        }
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const time = date.toLocaleTimeString();

    listItem.innerHTML = `
        <div class="task-details">
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        </div>
        <div class="task-time">${formattedDate} ${time}</div>
    `;
    
    taskList.appendChild(listItem);
}

function removeTask(button) {
    const listItem = button.parentNode.parentNode;
    listItem.remove();
}
