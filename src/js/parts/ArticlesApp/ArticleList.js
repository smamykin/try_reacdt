import React from 'react'

export default class ArticleList extends React.Component
{
    render() {
        return (
            <ul className="article-list">
                <li className="article-list__item">
                    <a className="article-list__item-link" href="#">Article Name</a>
                </li>
                <li className="article-list__item">
                    <a className="article-list__item-link" href="#">Article Name</a>
                </li>
                <li className="article-list__item">
                    <a className="article-list__item-link" href="#">Article Name</a>
                </li>
                <li className="article-list__item">
                    <a className="article-list__item-link" href="#">Article Name</a>
                </li>
            </ul>
        );
    }
}