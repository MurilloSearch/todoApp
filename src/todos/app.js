import html from './app.html?raw';
import todoStore, {Filters} from '../store/todo.store';
import { renderTodos, renderPendingTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPendingTodos(ElementIDs.PendingCountLabel);
    }
    
    //Uso de la función App()
    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app)
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList)
    const clearCompletedBtn = document.querySelector(ElementIDs.ClearCompleted)
    const filtersLI = document.querySelectorAll(ElementIDs.TodoFilters)

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode !== 13 ) return;
        if(event.target.value.trim().lenght ===0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value='';
    })

    todoListUL.addEventListener('click',(event)=>{
        const element = event.target.closest('[data-id]')
        todoStore.toggleTodo(element.getAttribute('data-id'))
        displayTodos();
    })

    todoListUL.addEventListener('click',(event)=>{
        if(event.target.className === 'destroy'){
            const element = event.target.closest('[data-id]')
            todoStore.deleteTodo(element.getAttribute('data-id'))
            displayTodos();
        } 
    })

    clearCompletedBtn.addEventListener('click', ()=>{
        todoStore.deleteCompleted()
        displayTodos();
    })

    filtersLI.forEach(element =>{
        
        element.addEventListener('click', (element) =>{
            filtersLI.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');
        
            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                break;
            }
            displayTodos()
        });
    });
}