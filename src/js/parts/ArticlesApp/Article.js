import React from "react";
import {withRouter, Link} from 'react-router-dom';

import PropTypes from "prop-types"

 class Article extends React.Component{
    render() {
        console.log(this.props);
        console.log(this.state);
        let id = +this.props.match.params.id,
            article  = this.props.articles.find((e)=> e.id === id);
        return (
            <div className='container'>
                <div className='article-page'>
                    <div className="article-page__title">{article.name}</div>
                    <div className="article-page__body">
                        {article.body}
                    </div>
                    <div className="article-page__back-block">
                        <Link to="/articles" className="article-page__back-block">back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       body: PropTypes.string.isRequired
    }))
};

export default withRouter(Article);