


import { Button } from "./components/Button/Button.js";
import { Card } from "./components/Card/Card.js";
import { Counter } from "./components/Counter/Counter.js";
import { TodoList } from "./components/TodoList/TodoList.js";




const app = document.getElementById('app');



function defineElements(){
  customElements.define('custom-button',Button)
  customElements.define('custom-card',Card)
  customElements.define('custom-counter',Counter)
  customElements.define('custom-todo',TodoList)
}

defineElements()


const todoElement = document.createElement('custom-todo');

app.append(todoElement);








