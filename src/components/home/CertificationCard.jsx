import React from 'react';

import {
  Col,
} from "react-bootstrap";

const CertificationCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img 
              className="m-0 mb-3" 
              src={data.logo} 
              alt="" 
              width="50%"
              height="50%"
              />
        <p className="lead">
          {data.title}
          <br />
          {data.date}
        </p>
      </div>
      <div className="pb-5 text-start">
        <p className="lead" dangerouslySetInnerHTML={{ __html: data.details }} />
      </div>
    </Col>
  );
}

export default CertificationCard;