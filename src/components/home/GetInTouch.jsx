import React from "react";

const GetInTouch = ({ heading, message, email, phoneMessage, phone}) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a className="text-decoration-none" href={`mailto:${email}`}>{email} </a>
        {phoneMessage} <a className="text-decoration-none" href={`tel:${phone}`}>{phone}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
