// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css";

const Header = (props) => {
    const {text,text2}= props
    return (
        <>
        {/* <h1 style={{margin: marginx, color: color}}></h1> */}
        <header>
            {text}
            {'\n'}
            
        </header>

        <h1>
            {text2}
        </h1>

        <hr/>
        
        </>
    )
}

export default Header;