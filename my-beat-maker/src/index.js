import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const colors = ['#CD6155', '#EC7063', '#9B59B6',
    '#8E44AD', '#2471A3', '#2E86C1', '#148F77', '#229954',
    '#D4AC0D', '#D68910', '#717D7E', 'lime', 'aqua', 'teal', '#FF00FF'
];





function backgroundChange() {
    let randomColor = Math.floor(Math.random() * colors.length - 1) + 1;
    let root = document.getElementById('bg')
    root.style.backgroundColor = colors[randomColor];
}

function transformUp(e) {
    const up = -10;
    e.target.style.transform = `translateY(${up}px)`
}

function transformDown(e) {
    const down = 0;
    e.target.style.transform = `translateY(${down}px)`
}

var test = document.querySelectorAll('.drum-pad');
test.forEach(pad => {
    pad.childNodes[0].addEventListener('mousedown', function (e) {
        e.stopPropagation()
    })
    pad.addEventListener('mousedown', transformUp)
    pad.addEventListener('mouseup', transformDown)
    pad.addEventListener('click', backgroundChange)
    //pad.addEventListener('keyup', transformDown)
})
document.addEventListener('keydown', function (e) {
    const up = -10;
    test.forEach(pad => {
        if (pad.childNodes[0].innerText.toLowerCase() === e.key || pad.childNodes[0].innerText.toUpperCase() === e.key) {
            pad.style.transform = `translateY(${up}px)`
        }
    })
})

document.addEventListener('keyup', function (e) {
    const down = 0;
    test.forEach(pad => {
        if (pad.childNodes[0].innerText.toLowerCase() === e.key || pad.childNodes[0].innerText.toUpperCase() === e.key) {
            pad.style.transform = `translateY(${down}px)`
        }
    })
})

document.addEventListener('keydown', backgroundChange)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
