import React from "react";

function Contact(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <p>Contact Number: +91 1234567890</p>
    </>
  );
}

export default Contact;
