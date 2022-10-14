import React from "react";

import Card from "react-bootstrap/Card";
import examsiteImage from "../../images/exam2image.png";
import semesterprojectImage from "../../images/semesterproject.png";
import jsCaImage from "../../images/jsfwCA.png";
import { Container, Row, Col } from "react-bootstrap";

function Cards() {
  return (
    <>
      <Container fluid>
        <h3 className="text-center">Some of my projects</h3>
        <Row xs={1} md={3} lg={3} className="cards_container">
          <Col>
            <Card>
              <Card.Img variant="top" src={examsiteImage} />
              <Card.Body>
                <Card.Title>Exam 2</Card.Title>
                <Card.Text>
                  Project exam 2 is a hotel site to find a place to stay in Bergen done with React js and bootstrap. It
                  contains multiple hotels to look at and inquire about.
                </Card.Text>
              </Card.Body>
              <a
                href="https://github.com/Noroff-FEU-Assignments/project-exam-2-sebbe1236"
                target="_blank"
                rel="noreferrer"
              >
                Exam 2
              </a>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={semesterprojectImage} />
              <Card.Body>
                <Card.Title>Semester project 2</Card.Title>
                <Card.Text>
                  E-commerce project that is a shoe store done with html, sass and javascript for the 2nd semester
                  project of my Noroff studies. It is a shoe store.
                </Card.Text>
              </Card.Body>
              <a
                href="https://github.com/sebbe1236/Sebastian-Kv-lsvoll-semester-project-2"
                target="_blank"
                rel="noreferrer"
              >
                Semester project 2 repo
              </a>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={jsCaImage} />
              <Card.Body>
                <Card.Title>JS frameworks CA</Card.Title>
                <Card.Text>
                  JS framework CA done with React js and bootstrap. Contains contact form with dropdown option and
                  fetches api results on front page. You can browse a single item.
                </Card.Text>
              </Card.Body>
              <a
                href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-sebbe1236"
                target="_blank"
                rel="noreferrer"
              >
                JS frameworks ca repo
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
