/*
Steps:
1. Create array to store todos
2. Get todo from Todo Name
3. Add the value into array
4. Display in the console
  a. Loop through the array
  b. Create some HTML code for each todo
  c. Put the HTML on web page
*/

const todoList = [{
  name: '',
  dueDate: '',
}, {
  name: '',
  dueDate: ''
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  //generating the HTML by loops
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
      <div class="name-HTML">${name}</div>
      <div class="dueDate-HTML">${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">&#x2713 Check</button>
      
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const todoInput = document.querySelector('.js-todo-input');
  const todoName = todoInput.value;

  const dateInputElement = document.querySelector('.js-dueDate');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name: todoName, 
    dueDate: dueDate
  });

  todoInput.value = '';

  renderTodoList();
}