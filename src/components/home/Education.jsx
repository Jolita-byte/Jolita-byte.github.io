import React from 'react';
import EducationCard from "./EducationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Education = ({ educations }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron fluid id="education" className="bg-light m-0">
          <h2 className="display-4 mb-5 text-center">
            {educations.heading}
          </h2>
          <Row>
            {
              educations.data.map((data, index) => {
                return <EducationCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Education;