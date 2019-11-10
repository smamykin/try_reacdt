import React from "react";
import './ArticlesApp/_common.scss'
import Article from "./ArticlesApp/Article";

import ArticleList from "./ArticlesApp/ArticleList";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import store from './ArticlesApp/articles.json';

export default class ArticlesApp extends React.Component
{
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route path='/articles'>
                            <ArticleList articles={store.articles}/>
                        </Route>
                        <Route path='/article/:id'>
                            <Article articles={store.articles}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
