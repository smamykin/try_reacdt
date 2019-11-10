import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

export default class ArticleList extends React.Component
{
    render() {
        return (
            <ul className="article-list">
                {
                    this.props.articles.map((v) => {
                        return (
                            <li key={v.id} className="article-list__item">
                                <Link className="article-list__item-link" href="#" to={`article/${v.id}`}>
                                    {v.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }))
};