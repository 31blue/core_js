

const todoItemTemplate = document.createElement('template');


todoItemTemplate.innerHTML = `
  <li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item">x</button>
  </li>
`

export class TodoItem extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.render()
  }

  render(){
    this.shadowRoot.append(todoItemTemplate.content.cloneNode(true))
  }
}























