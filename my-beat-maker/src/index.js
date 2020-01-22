import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

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




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
