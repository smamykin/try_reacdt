//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesApp from "./parts/ArticlesApp";


ReactDOM.render(
    <ArticlesApp/>,
    document.getElementById('mount-point')
);

