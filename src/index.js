import '../index.css';

const JS_IMG = '../assets/js.png';

const img_element = document.createElement('img');
img_element.className = 'js-img';
img_element.src = JS_IMG;

document.body.append(img_element)