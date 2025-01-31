import html from './app.html?raw'

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    //Uso de la función App()
    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app)
    })();
}