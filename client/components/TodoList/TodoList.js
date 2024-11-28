


const todoTemplate = document.createElement('template');


todoTemplate.innerHTML = `
<style>@import url('./components/TodoList/TodoList.css');</style>
  <div class="container">
    <h1>TO DO LIST <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item"> + </button>
  </div>
`


export class TodoList extends HTMLElement {

  constructor(){
    super();

    this.attachShadow({mode:'open'})
    this.render()
  }


  render(){
    this.shadowRoot.append(todoTemplate.content.cloneNode(true))
  }
}







