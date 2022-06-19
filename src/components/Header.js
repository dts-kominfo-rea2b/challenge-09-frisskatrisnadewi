// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* <h1 style={{margin: marginx, color: color}}></h1> */}
      <header>
        <h1>
          Call a Friend
          {"\n"}
        </h1>
      </header>

      <p>your friendly contact app</p>

      <hr />
    </>
  );
};

export default Header;
