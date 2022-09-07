import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import buttonStyles from './button.module.css';
import imageStyles from './image.module.css';
import img from './Spidey.jpeg';
import data from './data.json';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h2>test</h2>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <h3 id="btn">hola</h3>

    <img id="img"></img>
    <pre>${JSON.stringify(data)}</pre>
  </div>
`

document.getElementById('btn').className = buttonStyles.btn;
const imagen = document.getElementById('img');
imagen.src = img;
imagen.className = imageStyles.img;


setupCounter(document.querySelector('#counter'))
