//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './parts/NotesApp'
import Timer from "./parts/Timer";


ReactDOM.render(
    <NotesApp/>,
    document.getElementById('mount-point')
);
