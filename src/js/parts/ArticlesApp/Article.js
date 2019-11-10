import React from "react";
import {withRouter, Link} from 'react-router-dom';

 class Article extends React.Component{
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className='container'>
                <div className='article-page'>
                    <div className="article-page__title">Article Name</div>
                    <div className="article-page__body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at atque, consectetur, doloribus earum error est excepturi incidunt laboriosam maxime neque nobis quasi reprehenderit, tempora vero? Assumenda fuga ut voluptatum?
                    </div>
                    <div className="article-page__back-block">
                        <Link to="/articles" className="article-page__back-block">back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Article);