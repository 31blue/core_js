

import { getNode, insertLast } from "kind-tiger";
import santa from "/src/assets/santa.png";

const app = getNode('#app');


const template = /* html */`
  <figure class="container">
    <img style="width:30vw" src="${santa}"/>
    <figcaption>산타 모자를 쓴 호랑이</figcaption>
  </figure>
`


insertLast(app,template)



















