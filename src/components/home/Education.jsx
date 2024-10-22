import React from 'react';
import EducationCard from "./EducationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Education = ({ educations }) => {
  return (
    <Jumbotron fluid id="education" className="bg-light m-0">
      <Container className="">
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
      </Container>
    </Jumbotron>
  );
}

export default Education;