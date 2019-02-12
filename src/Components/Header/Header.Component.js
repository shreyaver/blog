import React from 'react';
import './Header.Component.css';

const Header = (props) => {
    return (
        <header>
        <div className="Content">
            <div>
            <h1>The Artifact</h1>
            <h2>Culture & Art blog</h2>
            </div>
            <nav>
                    <div className="navBar">
                    <a href="/">Blog</a> 
                    <a href="#">About</a>  
                    <a href="#">Contact</a>  
                    </div>
            </nav>
        </div>
        </header>
    )
}
export default Header;
