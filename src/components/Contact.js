// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
const Contact = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="divmain">
        <div className="divcontent">
          <img src={data.photo}></img>
        </div >
        <div className="divcontent">
          <h4>{data.name}</h4>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
