import React from "react";

export default class Article extends React.Component{
    render() {
        return (
            <div className='container'>
                <div className='article-page'>
                    <div className="article-page__title">Article Name</div>
                    <div className="article-page__body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at atque, consectetur, doloribus earum error est excepturi incidunt laboriosam maxime neque nobis quasi reprehenderit, tempora vero? Assumenda fuga ut voluptatum?
                    </div>
                    <div className="article-page__back-block">
                        <a href="#" className="article-page__back-block">back</a>
                    </div>
                </div>
            </div>
        );
    }
}