export class Todo {
    /**
     * 
     * @param {String} description Descripción de la tarea (To do)
     */

    constructor(description){
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
        
    }

}