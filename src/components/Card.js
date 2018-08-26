import React from 'react';

const Card = props => (
    <div className="col-md-4">
        <div className="card">
            <div className="card__top">
                <span className="card__subreddit">{props.subreddit}</span>
                <img className="card__img" src={props.image} alt="Imagine"/>
                <span className="card__score">{props.score}</span>
            </div>
            <div className="card__bottom">
                <h2 className="card__title">{props.title}</h2>
                <span className="card__author">{props.author}</span>
                <a href={props.url} target="_blank" className="card__link">Visit Post</a>
            </div>
        </div>
    </div>
);

export default Card;