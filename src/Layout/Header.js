
import { LitElement, html, css } from 'lit'
import resetCss from './resetCSS'


class Header extends LitElement {

  render(){
    return html`
      <header>
        <h1 class="logo">
          <a href="/"><img style="width:30px" src="/logo.png" alt="3D 호랑이 얼굴" /></a>
          <span>HypeCart</span>
        </h1>
      </header>
    `
  }
}


customElements.define('c-header',Header)



























