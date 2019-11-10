import React from "react";
import './ArticlesApp/_common.scss'
import Article from "./ArticlesApp/Article";

import ArticleList from "./ArticlesApp/ArticleList";
export default class ArticlesApp extends React.Component
{
    render() {
        return (
            <div className='container'>
                {/*<ArticleList/>*/}
                <Article/>
            </div>
        );
    }
}
