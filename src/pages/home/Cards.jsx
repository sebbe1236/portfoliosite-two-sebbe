import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import examsiteImage from "../../images/exam2image.png";
import semesterprojectImage from "../../images/semesterproject.png";
import jsCaImage from "../../images/jsfwCA.png";
import { Container, Row, Col, CardGroup } from "react-bootstrap";

function Cards() {
  return (
    <>
      <Container fluid>
        <h3>Some of my projects</h3>
        <CardGroup className="cards_container p-3 m-3">
          <Card>
            <Card.Img variant="top" src={examsiteImage} />
            <Card.Body>
              <Card.Title>Exam 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={semesterprojectImage} />
            <Card.Body>
              <Card.Title>Semester project 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={jsCaImage} />
            <Card.Body>
              <Card.Title>JS frameworks CA</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}

export default Cards;
