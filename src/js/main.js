//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from  'react-dom';

class Article extends React.Component
{
    render(){
        return (<div className={'article'}>
            <h1 className={'article__title'}>{this.props.title}</h1>
            <div className={'article__author'}>{this.props.author}</div>
            <div className={'article__text'}>{this.props.text}</div>
        </div>);
    }
}

let article = {
    title: 'Melted carrots can be made dark by tossing with peanut sauce.',
    author: 'Jhon Wick',
    text: 'Try pressing cake flavored with maple syrup, brushed with cinnamon. Try seasoning the red wine pickles with delicious remoulade and crême fraîche, sautéed.' +
        'Place the ground beef in a bucket, and marinate thoroughly with hot adobo sauce. Everyone loves the viscosity of bagel ricotta flavord with sun-dried za\'atar.'
};

ReactDOM.render(
    <Article title={article.title} author={article.author} text={article.text}/>,
    document.getElementById('app')
);
