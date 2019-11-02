//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './parts/NotesApp'
import Timer from "./parts/Timer";
import ToDoApp from "./parts/ToDoApp";


ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('mount-point')
);

let inputsControl = document.querySelectorAll('.todo__add-task');

for (let i = inputsControl.length;i--;){
    let element = inputsControl[i],
        input = element.querySelector('.todo__add-task-input'),
        className = 'todo__add-task_focused';

    input.addEventListener('focus', function () {
        element.classList.add(className);
        input.focus();
    });

    element.addEventListener('click', function (){
        element.classList.add(className);
        input.focus();
    });

    input.addEventListener('blur', function (){
        element.classList.remove(className);
    });
}

