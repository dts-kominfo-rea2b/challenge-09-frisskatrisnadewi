// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css";

const Header = (props) => {
    const {text,text2}= props
    return (
        <>
        {/* <h1 style={{margin: marginx, color: color}}></h1> */}
        <h1>
            {text}
            {'\n'}
            
        </h1>

        <p>
            {text2}
        </p>

        <hr/>
        
        </>
    )
}

export default Header;