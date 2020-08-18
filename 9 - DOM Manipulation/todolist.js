
const button = document.getElementById("addTodoBtn")

button.onclick = function () {
    const newTodoInput = document.getElementById('newTodoInput');
    let currentTodoList = document.getElementById('todoList').innerHTML;
    currentTodoList += `<li>${newTodoInput.value}</li>`;
    document.getElementById('todoList').innerHTML = currentTodoList;
    newTodoInput.value = '';
};