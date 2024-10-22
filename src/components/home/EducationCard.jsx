import React from 'react';

import {
  Col,
} from "react-bootstrap";

const EducationCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.logo} alt="" />
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

export default EducationCard;