import {Todo} from '../todos/models/todo.model'

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

export default {
    initStore,
}