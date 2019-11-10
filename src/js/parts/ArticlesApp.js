import React from "react";
import './ArticlesApp/_common.scss'

import ArticleList from "./ArticlesApp/ArticleList";
export default class ArticlesApp extends React.Component
{
    render() {
        return (
            <div className='container'>
                <ArticleList/>
            </div>
        );
    }
}
