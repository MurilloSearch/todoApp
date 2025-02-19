import { Todo } from '../todos/models/todo.model'

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {

    todos: [
        new Todo('Tarea 1'),
        new Todo('Tarea 2'),
        new Todo('Tarea 3')
    ],

    filter: Filters.All,
}

const initStore = () =>{
    console.log(state)
    console.log('Init Store')
}

const loadStore = () =>{
    throw new Error('Not implemented');
    
}

const getTodos = (filter = Filters.All) =>{
    switch(filter){
        case Filters.All:
            return [...state.todos]; //new array with all the features
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default: 
            throw new Error (`Option ${filter} is not valid.`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) =>{
    if(!description) throw new Error('Description required');
    state.todos.push(new Todo(description))

}

const toggleTodo=(todoId)=>{
    throw new Error('Not implemented');
}

const deleteTodo=(todoId)=>{
    throw new Error('Not implemented');
}

const deleteCompleted=()=>{
    throw new Error('Not implemented');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
}

const getCurrentFilter =() => {

    throw new Error('Not implemented');
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo
}