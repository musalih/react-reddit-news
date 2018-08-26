import React from 'react';

const Form = props => (
  //  searchRef = React.createRef();
    <div className="search">
        <div className="container">
            <p className="search__error">
                {props.error ?  "No results found. Please search again." : ""}
            </p>
            <div className="search__section">
            <h4 className="search__heading">Search Reddit</h4>
            <form className="form" onSubmit={props.getNews}>
                <div className="form__group">
                    <input id="search" type="text" className="form__input" placeholder="Search" required />
                    <label htmlFor="search" className="form__label">Search</label>
                </div>
                <button className="form__button">Search</button>
            </form>
            </div>
        </div>
    </div>
);

export {Form};