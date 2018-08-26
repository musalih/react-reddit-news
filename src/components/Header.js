import React from 'react';

const Header = props => (
    <nav className="navigation navbar navbar-expand-lg">
        <div className="container">
                <span className="navbar-brand navigation__brand">{props.title}</span>
        </div>
    </nav>
);

export default Header;