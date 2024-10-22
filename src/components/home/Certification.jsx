import React from 'react';
import CertificationCard from "./CertificationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Certification = ({ certifications }) => {
  return (
    <Jumbotron fluid id="certification" className="bg-white m-0">
      <Container className="">
          <h2 className="display-4 mb-5 text-center">
            {certifications.heading}
          </h2>
          <Row>
            {
              certifications.data.map((data, index) => {
                return <certificationCard key={index} data={data} />
              })
            }
          </Row>
      </Container>
    </Jumbotron>
  );
}

export default Certification;