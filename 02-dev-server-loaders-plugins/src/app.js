import './style.css';
import mul from './mul.js';

// inject content into html file
document.getElementById('root').textContent = `3*3 = ${mul(3, 3)}`;
