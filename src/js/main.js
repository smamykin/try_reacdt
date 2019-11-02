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

