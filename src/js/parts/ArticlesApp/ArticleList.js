import React from 'react'
import {Link} from 'react-router-dom'

export default class ArticleList extends React.Component
{
    render() {
        return (
            <ul className="article-list">
                <li className="article-list__item">
                    <Link className="article-list__item-link" href="#" to='/article/1'>Article Name</Link>
                </li>
                <li className="article-list__item">
                    <Link className="article-list__item-link" href="#" to='/article/2'>Article Name</Link>
                </li>
                <li className="article-list__item">
                    <Link className="article-list__item-link" href="#" to='/article/3'>Article Name</Link>
                </li>
            </ul>
        );
    }
}