import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="12">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
        <p className="lead" dangerouslySetInnerHTML={{ __html: formatResponsibilities(data.responsibilities) }} />

      </div>
    </Col>
  );
}

export default ExperienceCard;